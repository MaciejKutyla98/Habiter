import { Component } from '@angular/core';
import { Habit } from 'src/app/core/interfaces/habit.interface';
import { habitListMock } from 'src/app/core/mocks/habit-list.mock';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent {
  habitListHeaders: string[] = ['name', 'description', 'priority'];
  habitList: Habit[] = habitListMock;
}
