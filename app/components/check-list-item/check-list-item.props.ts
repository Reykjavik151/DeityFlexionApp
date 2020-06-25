import { ReminderListItemType } from "../../utils/types"

export interface CheckListItemProps {
  item: ReminderListItemType
  onChangeText: (listItemId: string, value: string) => void
  onPress: (listItemId: string, value: boolean) => void
  onRemove: (listItemId: string) => void
}
