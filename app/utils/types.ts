import { ITEM_STATUS } from "./constants"

export interface TaskType {
  id: string
  title: string
  createdAt: Date
  status: keyof typeof ITEM_STATUS
}

export interface ReminderListItemType {
  title: string
  isDone: boolean
}

export interface ReminderType {
  id: string
  title: string
  description: string
  createdAt: Date
  list: ReminderListItemType[]
}
