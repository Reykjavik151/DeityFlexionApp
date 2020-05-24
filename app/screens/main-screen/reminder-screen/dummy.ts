import { ReminderType } from "../../../utils/types"

export const REMINDERS_DUMMY: ReminderType[] = [
  {
    id: "1",
    title: "Shop list",
    description: "My shop list",
    createdAt: new Date(),
    list: [
      {
        title: "Tomatoes",
        isDone: false,
      },
      {
        title: "Cucumbers",
        isDone: false,
      },
      {
        title: "Potatoes",
        isDone: true,
      },
      {
        title: "Fruits",
        isDone: false,
      },
    ],
  },
  {
    id: "2",
    title: "Another list",
    description: null,
    createdAt: new Date(),
    list: [
      {
        title: "List item 1",
        isDone: false,
      },
      {
        title: "List item 2",
        isDone: true,
      },
      {
        title: "List item 3",
        isDone: true,
      },
      {
        title: "List item 4",
        isDone: false,
      },
    ],
  },
  {
    id: "3",
    title: "Music Reminder",
    description: "My future music playlist",
    createdAt: new Date(),
    list: [
      {
        title: "Paul Stanley - Live To Win",
        isDone: false,
      },
      {
        title: "Yellowcard - Breathing",
        isDone: false,
      },
      {
        title: "Johnny Cash - Hurt",
        isDone: false,
      },
    ],
  },
]
