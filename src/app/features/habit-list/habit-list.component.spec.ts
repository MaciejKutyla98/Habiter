import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitListComponent } from './habit-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HabitListService } from './habit-list.service';
import { ApolloModule } from 'apollo-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { MatIconModule } from '@angular/material/icon';
import { GraphQLModule } from 'src/app/graphql.module';

describe('HabitListComponent', () => {
  let component: HabitListComponent;
  let fixture: ComponentFixture<HabitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitListComponent ],
      imports: [
        MatDialogModule,
        MatIconModule,
        ApolloModule,
        GraphQLModule
      ],
      providers: [
        HabitListService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
