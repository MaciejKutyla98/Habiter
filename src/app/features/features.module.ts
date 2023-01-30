import { NgModule } from '@angular/core';
import { HabitListComponent } from './habit-list/habit-list.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HabitListComponent,
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  exports: [
    HabitListComponent
  ]
})
export class FeaturesModule { }