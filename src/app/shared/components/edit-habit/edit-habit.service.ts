import { Injectable } from '@angular/core';
import { Habit, HabitInput, UpdateHabitGQL } from 'graphql/generated';

@Injectable({
  providedIn: 'root'
})
export class EditHabitService {

  constructor(
    private updateHabitGQL: UpdateHabitGQL
  ) { }

  updateHabit(habit: HabitInput): void {
    this.updateHabitGQL.mutate({
      habitInput: habit
    }).subscribe();
  }
}
