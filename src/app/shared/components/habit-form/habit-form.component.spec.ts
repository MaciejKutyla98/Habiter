import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitFormComponent } from './habit-form.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ApolloModule } from 'apollo-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('HabitFormComponent', () => {
  let component: HabitFormComponent;
  let fixture: ComponentFixture<HabitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitFormComponent ],
      imports: [
        MatDialogModule,
        ApolloModule,
        FormsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
