import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Habit, HabitInput, HabitPriority, HabitsQuery } from 'graphql/generated';
import { Priority } from 'src/app/core/enums/priority.enum';
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

  createHabit(habit: HabitInput): void {
    this.habitListService.createHabit({
      idToUpdate: habit.idToUpdate,
      name: habit.name,
      priority: habit.priority,
      description: habit.description
      })
  }

  exampleHabit = {
    id: '5',
    name: 'meditation',
    priority: HabitPriority.High,
    description: 'jakis opis'
  }
}
