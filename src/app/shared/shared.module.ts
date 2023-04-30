import { NgModule } from '@angular/core';
import { EditHabitComponent } from './components/edit-habit/edit-habit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from './services/auth/auth.service';
@NgModule({
  declarations: [
    EditHabitComponent
  ],
  imports: [
    BrowserModule, 
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [AuthService],
  exports: [
    EditHabitComponent
  ]
})
export class SharedModule { }