import { ReminderType } from "../../../utils/types"
import randomString from "random-string"

export const REMINDERS_DUMMY: ReminderType[] = [
  {
    id: randomString(),
    title: "Shop list",
    description: "My shop list",
    createdAt: new Date(),
    list: [
      {
        id: randomString(),
        title: "Tomatoes",
        isDone: false,
      },
      {
        id: randomString(),
        title: "Cucumbers",
        isDone: false,
      },
      {
        id: randomString(),
        title: "Potatoes",
        isDone: true,
      },
      {
        id: randomString(),
        title: "Fruits",
        isDone: false,
      },
    ],
  },
  {
    id: randomString(),
    title: "Another list",
    description: null,
    createdAt: new Date(),
    list: [
      {
        id: randomString(),
        title: "List item 1",
        isDone: false,
      },
      {
        id: randomString(),
        title: "List item 2",
        isDone: true,
      },
      {
        id: randomString(),
        title: "List item 3",
        isDone: true,
      },
      {
        id: randomString(),
        title: "List item 4",
        isDone: false,
      },
    ],
  },
  {
    id: randomString(),
    title: "Music Reminder",
    description: "My future music playlist",
    createdAt: new Date(),
    list: [
      {
        id: randomString(),
        title: "Paul Stanley - Live To Win",
        isDone: false,
      },
      {
        id: randomString(),
        title: "Yellowcard - Breathing",
        isDone: false,
      },
      {
        id: randomString(),
        title: "Johnny Cash - Hurt",
        isDone: false,
      },
    ],
  },
]
