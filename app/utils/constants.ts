import { ReminderType } from "./types"
import randomString from "random-string"

interface ItemStatus {
  none: "none"
  canceled: "canceled"
  completed: "completed"
}
export const ITEM_STATUS: ItemStatus = {
  none: "none",
  canceled: "canceled",
  completed: "completed",
}

export const EMPTY_REMINDER: ReminderType = {
  id: randomString(),
  title: "",
  description: "",
  createdAt: new Date(),
  list: [],
}
