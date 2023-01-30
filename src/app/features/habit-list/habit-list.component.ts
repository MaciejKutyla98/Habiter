import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Habit } from 'src/app/core/interfaces/habit.interface';
import { habitListMock } from 'src/app/core/mocks/habit-list.mock';
import { EditHabitComponent } from 'src/app/shared/components/edit-habit/edit-habit.component';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent implements OnInit {
  habitListHeaders: string[] = ['name', 'description', 'priority', 'actions'];
  habitList: Habit[] = habitListMock;
  @ViewChild(MatTable) table: MatTable<any> = {} as MatTable<any>;
  constructor (public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  deleteHabit(habitId: string): void {
    this.habitList = this.habitList.filter((habit: Habit) => habit.id !== habitId);
  }

  editHabit(habit: Habit): void {
    const dialogRef: MatDialogRef<EditHabitComponent, any> = this.dialog.open(EditHabitComponent, {
      data: habit,
    });

    dialogRef.afterClosed().subscribe({
      next: (editedHabit: Habit) => {
        if (typeof editedHabit !== 'undefined') {
          this.replaceExistingHabit(editedHabit);
          this.table.renderRows();
        }
      },
      error: error => this.habitList = []
    })
    }
  
  private replaceExistingHabit(editedHabit: Habit): void {
    this.habitList[this.habitList.findIndex(row => row.id === editedHabit.id)] = editedHabit;
  }
}
