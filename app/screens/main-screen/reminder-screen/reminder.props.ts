import { ReminderType } from "../../../utils/types"

export interface ReminderProps {
  reminders: ReminderType[]
  onAddReminder: (title: string, description: string) => void
}
