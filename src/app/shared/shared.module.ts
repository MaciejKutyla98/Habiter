import { NgModule } from '@angular/core';
import { HabitFormComponent } from './components/habit-form/habit-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HabitFormService } from './components/habit-form/habit-form.service';
@NgModule({
  declarations: [
    HabitFormComponent
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
  providers: [HabitFormService],
  exports: [
    HabitFormComponent
  ]
})
export class SharedModule { }