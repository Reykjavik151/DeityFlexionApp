import { ReminderType } from "../../utils/types"

export interface RemindersListProps {
  data: ReminderType[]
  onItemPress: (task: ReminderType) => void
}
