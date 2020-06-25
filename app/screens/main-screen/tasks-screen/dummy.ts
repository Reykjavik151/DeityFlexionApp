import { TaskType } from "../../../utils/types"
import randomString from "random-string"

export const TASKS_DUMMY: TaskType[] = [
  {
    id: randomString(),
    title: "Pass the test 28.05",
    createdAt: new Date(),
    status: "none",
  },
  {
    id: randomString(),
    title: "Repair the car",
    createdAt: new Date(),
    status: "none",
  },
  {
    id: randomString(),
    title: "Some another task with canceled status",
    createdAt: new Date(),
    status: "canceled",
  },
  {
    id: randomString(),
    title: "Another stuff with completed status",
    createdAt: new Date(),
    status: "completed",
  },
]
