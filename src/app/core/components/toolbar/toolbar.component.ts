import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../../enums/routes.enum';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor (private router: Router) {}
  routes =  Routes;

  navigateToSelectedFromMenu(url: string): void {
    this.router.navigateByUrl(url);
  }
}
