import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../../enums/routes.enum';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor (private router: Router, public authService: AuthService) {}
  routes =  Routes;

  navigateToSelectedFromMenu(url: string): void {
    this.router.navigateByUrl(url);
  }
}
