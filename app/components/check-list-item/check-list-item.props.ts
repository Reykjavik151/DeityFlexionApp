import { ReminderListItemType } from "../../utils/types"

export interface CheckListItemProps {
  item: ReminderListItemType
  onChangeText: (reminderListItem: ReminderListItemType, newText: string) => void
  onPress: (checkListItem: ReminderListItemType) => void
}
