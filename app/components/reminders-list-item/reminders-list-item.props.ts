import { ReminderType } from "../../utils/types"

export interface RemindersListItemProps {
  item: ReminderType
  onPress: () => void
}
