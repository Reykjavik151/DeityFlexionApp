import { ReminderType } from "./types"

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
  id: "",
  title: "",
  description: "",
  createdAt: null,
  list: [],
}
