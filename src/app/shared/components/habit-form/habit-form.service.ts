import { Injectable } from '@angular/core';
import { CreateHabitGQL, HabitInput, HabitsGQL, UpdateHabitGQL } from 'graphql/generated';

@Injectable({
  providedIn: 'root'
})
export class HabitFormService {

  constructor (
    private habitsQGL: HabitsGQL,
    private updateHabitGQL: UpdateHabitGQL,
    private createHabitGQL: CreateHabitGQL
  ) { }

  updateHabit(habit: HabitInput): void {
    this.updateHabitGQL.mutate({
      habitInput: habit
    }).subscribe();
  }

  createHabit(habit: HabitInput): void {
    this.createHabitGQL.mutate({
      habitInput: habit
    }, {
      refetchQueries: [{
        query: this.habitsQGL.document
      }]
  }).subscribe();
  }
}
