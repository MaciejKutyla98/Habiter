import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditHabitService } from './edit-habit.service';
import { Habit } from 'graphql/generated';
import { Priority } from 'src/app/core/enums/priority.enum';
import { ChoosePriority } from 'src/app/core/interfaces/choose-priority.interface';

@Component({
  selector: 'app-edit-habit',
  templateUrl: './edit-habit.component.html',
  styleUrls: ['./edit-habit.component.scss']
})
export class EditHabitComponent {
  editableHabit: Habit = {...this.habit};
  choosePriority: ChoosePriority[] = [
    {value: Priority.Low, viewValue: 'Low'},
    {value: Priority.Medium, viewValue: 'Medium'},
    {value: Priority.High, viewValue: 'High'},
  ];

  constructor(
    public dialogRef: MatDialogRef<EditHabitComponent>,
    @Inject(MAT_DIALOG_DATA) public habit: Habit,
    private editHabitService: EditHabitService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveHabit(): void {    
    this.editHabitService.updateHabit({
      idToUpdate: this.editableHabit.id,
      name: this.editableHabit.name,
      priority: this.editableHabit.priority,
      description: this.editableHabit.description
      })
    this.dialogRef.close();
  }
}
