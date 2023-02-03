import { NgModule } from '@angular/core';
import { HabitListComponent } from './habit-list/habit-list.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HabitListService } from './habit-list/habit-list.service';

@NgModule({
  declarations: [
    HabitListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [HabitListService],
  exports: [
    HabitListComponent
  ]
})
export class FeaturesModule { }