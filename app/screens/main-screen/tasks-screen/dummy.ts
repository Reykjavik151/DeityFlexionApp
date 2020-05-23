import { TaskType } from "../../../utils/types"

export const TASKS_DUMMY: TaskType[] = [
  {
    id: "1",
    title: "Pass the test 28.05",
    createdAt: new Date(),
    status: "none",
  },
  {
    id: "2",
    title: "Repair the car",
    createdAt: new Date(),
    status: "none",
  },
  {
    id: "3",
    title: "Some another task with canceled status",
    createdAt: new Date(),
    status: "canceled",
  },
  {
    id: "4",
    title: "Another stuff with completed status",
    createdAt: new Date(),
    status: "completed",
  },
]
