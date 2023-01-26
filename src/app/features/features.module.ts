import { NgModule } from '@angular/core';
import { HabitListComponent } from './habit-list/habit-list.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    HabitListComponent,
  ],
  imports: [
    MatTableModule
  ],
  providers: [],
  exports: [
    HabitListComponent
  ]
})
export class FeaturesModule { }