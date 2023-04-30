import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitListComponent } from './features/habit-list/habit-list.component';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponent
  },
  {
    path: 'habit-list',
    canActivate: [AuthGuard],
    component: HabitListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
