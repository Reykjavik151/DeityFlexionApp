import { ReminderListItemType } from "../../utils/types"

export interface CheckListProps {
  data: ReminderListItemType[]
  onItemChangeText: (newText: string) => void
  onItemPress: (item: ReminderListItemType) => void
}
