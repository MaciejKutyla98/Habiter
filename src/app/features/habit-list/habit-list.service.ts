import { Injectable } from '@angular/core'
import {  HabitsGQL, HabitsQuery } from 'graphql/generated';
import { map, Observable } from 'rxjs';

@Injectable()
export class HabitListService {
    constructor (
        private habitsQGL: HabitsGQL
    ) {}

    getHabitsList(): Observable<HabitsQuery['habits']> {
        return this.habitsQGL.watch().valueChanges.pipe(
            map((response) => response.data.habits ?? [])
        )
    }
}