import { Priority } from "src/app/core/enums/priority.enum";
import { Pomodoro } from "src/app/core/interfaces/pomodoro.interface";

export interface Habit {
    name: string,
    priority: Priority,
    description: string,
    pomodoro: Pomodoro []
}