import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Apollo, gql } from 'apollo-angular';
import { HabitsQuery } from 'graphql/generated';
import { Habit } from 'src/app/core/interfaces/habit.interface';
import { EditHabitComponent } from 'src/app/shared/components/edit-habit/edit-habit.component';
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

  rates: any[] = [];
  loading = true
  error: any

  constructor (
    public dialog: MatDialog,
    private apollo: Apollo,
    private habitListService: HabitListService,
    ) { }

  ngOnInit() {
    this.habitListService.getHabitsList().subscribe(resp => this.habitList = [...resp]);
  }

  deleteHabit(habitId: string): void {
    this.habitList = this.habitList.filter((habit: HabitsQuery['habits'][0]) => habit.id !== habitId);
  }

  editHabit(habit: Habit): void {
    const dialogRef: MatDialogRef<EditHabitComponent, any> = this.dialog.open(EditHabitComponent, {
      data: habit,
    });

    dialogRef.afterClosed().subscribe({
      next: (editedHabit: HabitsQuery['habits'][0]) => {
        if (typeof editedHabit !== 'undefined') {
          this.replaceExistingHabit(editedHabit);
          this.table.renderRows();
        }
      },
      error: error => this.habitList = []
    })
    }
  
  private replaceExistingHabit(editedHabit: HabitsQuery['habits'][0]): void {
    this.habitList[this.habitList.findIndex((row: HabitsQuery['habits'][0]) => row.id === editedHabit.id)] = editedHabit;
  }
}
