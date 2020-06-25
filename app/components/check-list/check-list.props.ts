import { ReminderListItemType } from "../../utils/types"

export interface CheckListProps {
  data: ReminderListItemType[]
  onItemChangeText: (listItemId: string, value: string) => void
  onItemPress: (listItemId: string, value: boolean) => void
  onAddCheckItem: () => void
}
