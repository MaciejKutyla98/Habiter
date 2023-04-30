import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditHabitService } from './habit-form.service';
import { Habit, HabitInput } from 'graphql/generated';
import { Priority } from 'src/app/core/enums/priority.enum';
import { ChoosePriority } from 'src/app/core/interfaces/choose-priority.interface';
import { HabitFormMode } from './habit-form-mode.enum';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss']
})
export class HabitFormComponent {
  editableHabit: Habit = {...this.data.habit};
  choosePriority: ChoosePriority[] = [
    {value: Priority.Low, viewValue: 'Low'},
    {value: Priority.Medium, viewValue: 'Medium'},
    {value: Priority.High, viewValue: 'High'},
  ];

  constructor(
    public dialogRef: MatDialogRef<HabitFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private habitFormService: EditHabitService,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveHabit(mode: HabitFormMode): void {  
    if (mode === HabitFormMode.Edit) {
      this.editHabit(this.editableHabit);
    } else if (mode === HabitFormMode.Create) {
      this.createHabit(this.editableHabit);
    }  
    this.dialogRef.close();
  }

  private editHabit(habit: Habit) {
    this.habitFormService.updateHabit({
      idToUpdate: habit.id,
      name: habit.name,
      priority: habit.priority,
      description: habit.description
    });
  }

  private createHabit(habit: HabitInput): void {
    this.habitFormService.createHabit({
      idToUpdate: habit.idToUpdate,
      name: habit.name,
      priority: habit.priority,
      description: habit.description
      })
  }

  getProperTitle(mode: HabitFormMode, habit?: Habit): string {
    if (mode === HabitFormMode.Create) {
      return `Create habit!`;
    } else if (mode === HabitFormMode.Edit) {
      return `Edit ${habit?.name} habit!`;
    }
    return '';
  }
}
