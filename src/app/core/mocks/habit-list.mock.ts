import { Habit } from "../interfaces/habit.interface";

export const habitListMock: Habit[] = [
    {
        name: 'Meditation',
        priority: 2,
        description: 'Meditation is considered a type of mind-body complementary medicine. Meditation can produce a deep state of relaxation and a tranquil mind. During meditation, you focus your attention and eliminate the stream of jumbled thoughts that may be crowding your mind and causing stress.',
        pomodoro: [
            {
                startDate: new Date("2023-01-26T09:20"),
                endDate: new Date("2023-01-26T09:50")
            }
        ]
    },
    {
        name: 'Duolingo',
        priority: 0,
        description: 'Duolingo is a provider of language learning platform that enables users to learn languages online. The companys lesson platform comprises gamification such as speaking, translation, listening, and multiple-choice challenges and provides grading and ways to improve.',
        pomodoro: [
            {
                startDate: new Date("2023-01-26T09:50"),
                endDate: new Date("2023-01-26T10:20")
            }
        ]
    },
    {
        name: 'Reading',
        priority: 1,
        description: 'Reading is a multifaceted process involving word recognition, comprehension, fluency, and motivation.',
        pomodoro: [
            {
                startDate: new Date("2023-01-26T10:20"),
                endDate: new Date("2023-01-26T10:50")
            }
        ]
    }
]