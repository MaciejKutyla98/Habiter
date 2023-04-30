import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Habit, HabitInput, HabitPriority, HabitsQuery } from 'graphql/generated';
import { Priority } from 'src/app/core/enums/priority.enum';
import { HabitFormComponent } from 'src/app/shared/components/habit-form/habit-form.component';
import { HabitListService } from './habit-list.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent implements OnInit {
  habitListHeaders: string[] = ['name', 'description', 'priority', 'actions'];
  habitList: HabitsQuery['habits'] = [];
  @ViewChild(MatTable) table: MatTable<any> = {} as MatTable<any>;
  newHabit: Habit = {} as Habit;
  rates: any[] = [];
  loading = true
  error: any

  constructor (
    public dialog: MatDialog,
    private habitListService: HabitListService,
    ) { }

  ngOnInit() {
    this.getHabitList();
  }

  private getHabitList(): void {
    this.habitListService.getHabitsList().subscribe({
      next: (habitList: HabitsQuery['habits']) => {
        this.habitList = [...habitList]
      },
      error:  (err: Error) => console.log(err),         
    })
}

  deleteHabit(habitId: string): void {
    this.habitListService.deleteHabit(habitId);
    this.table.renderRows();
  }

  openHabitForm(habit: Habit, mode: string): void {
    const dialogRef: MatDialogRef<HabitFormComponent, any> = this.dialog.open(HabitFormComponent, {
      data: {
        habit: habit,
        mode: mode
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (editedHabit: HabitsQuery['habits'][0]) => {
        if (typeof editedHabit !== 'undefined') {
          this.table.renderRows();
        }
      },
      error: error => this.habitList = []
    })
    }
}
