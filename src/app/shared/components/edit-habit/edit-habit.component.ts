import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChoosePriority } from 'src/app/core/interfaces/choose-priority.interface';
import { Habit } from 'src/app/core/interfaces/habit.interface';

@Component({
  selector: 'app-edit-habit',
  templateUrl: './edit-habit.component.html',
  styleUrls: ['./edit-habit.component.scss']
})
export class EditHabitComponent {
  editableHabit: Habit = {...this.habit};
  choosePriority: ChoosePriority[] = [
    {value: 0, viewValue: 'Low'},
    {value: 1, viewValue: 'Medium'},
    {value: 2, viewValue: 'High'},
  ];

  constructor(
    public dialogRef: MatDialogRef<EditHabitComponent>,
    @Inject(MAT_DIALOG_DATA) public habit: Habit,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveHabit(): void {
    this.habit = {...this.editableHabit};
    this.dialogRef.close(this.habit);
  }
}
