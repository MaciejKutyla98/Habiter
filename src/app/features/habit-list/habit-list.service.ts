import { Injectable } from '@angular/core'
import {  CreateHabitGQL, DeleteHabitGQL, HabitInput, HabitsGQL, HabitsQuery } from 'graphql/generated';
import { map, Observable } from 'rxjs';

@Injectable()
export class HabitListService {
    constructor (
        private habitsQGL: HabitsGQL,
        private deleteHabitGQL: DeleteHabitGQL,
        private createHabitGQL: CreateHabitGQL
    ) {}

    getHabitsList(): Observable<HabitsQuery['habits']> {
        return this.habitsQGL.watch().valueChanges.pipe(
            map((response) => response.data.habits ?? [])
        )
    }

    deleteHabit(habitId: string): void {
        this.deleteHabitGQL.mutate({
            idToDelete: habitId
        }, {
          refetchQueries: [{
            query: this.habitsQGL.document
          }]
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