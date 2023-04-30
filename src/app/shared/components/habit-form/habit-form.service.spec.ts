import { TestBed } from '@angular/core/testing';

import { EditHabitService } from './habit-form.service';

describe('EditHabitService', () => {
  let service: EditHabitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditHabitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
