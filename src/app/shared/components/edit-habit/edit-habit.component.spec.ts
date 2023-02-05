import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHabitComponent } from './edit-habit.component';

describe('EditHabitComponent', () => {
  let component: EditHabitComponent;
  let fixture: ComponentFixture<EditHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHabitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
