import { ITEM_STATUS } from "./constants"

export interface TaskType {
  id: string
  title: string
  createdAt: Date
  status: keyof typeof ITEM_STATUS
}
