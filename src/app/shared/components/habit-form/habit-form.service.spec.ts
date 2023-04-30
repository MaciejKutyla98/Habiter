import { TestBed } from '@angular/core/testing';

import { HabitFormService } from './habit-form.service';
import { ApolloModule } from 'apollo-angular';

describe('EditHabitService', () => {
  let service: HabitFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloModule,
      ]
    });
    service = TestBed.inject(HabitFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
