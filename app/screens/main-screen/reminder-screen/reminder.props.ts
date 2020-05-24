import { ReminderType } from "../../../utils/types"

export interface ReminderProps {
  reminders: ReminderType[]
  onReminderPress: (reminder: ReminderType) => void
  onAddPress: () => void
}
