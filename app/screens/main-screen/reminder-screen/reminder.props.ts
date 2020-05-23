import { ReminderType } from "../../../utils/types"

export interface ReminderProps {
  reminders: ReminderType[]
  onAddPress: () => void
}
