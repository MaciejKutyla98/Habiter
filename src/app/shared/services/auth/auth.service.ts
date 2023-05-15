import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User, ValidateAuthenticatedUserGQL } from 'graphql/generated';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; 

  constructor (
    public afAuth: AngularFireAuth, 
    public router: Router,
    public ngZone: NgZone,
    private validateAuthenticatedUserGQL: ValidateAuthenticatedUserGQL
  ) { 
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        this.setLoggedInformationToLocalStorage();
      }
    });
  }

  signInWithGoogle() {
    return this.signInWithPopup(new auth.GoogleAuthProvider()).then((res: any) => {
      from(res.user.getIdToken()).subscribe({
        next: (idToken: any) => {
          this.validateLoggedUser(idToken)
        },
        error: (err: any) => new Error(err),
        complete: () => {
          this.router.navigate(['habit-list']);
        }
      });
    
    });
  }

  signInWithPopup(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .catch((error) => {
        window.alert(error);
      });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('isUserLoggedIn');
      this.router.navigate(['login']);
    });
  }

  validateLoggedUser(userToken: string): void {    
    this.validateAuthenticatedUserGQL.mutate(undefined, {
      context: {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }
    }).subscribe();
  }

  setLoggedInformationToLocalStorage(): void {
    localStorage.setItem('isUserLoggedIn', 'true')
  }
}