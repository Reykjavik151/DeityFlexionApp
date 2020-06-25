import { ReminderType } from "../../../utils/types"

export interface ReminderAddProps {
  item: ReminderType
  isEdited: boolean
  onBackPress: () => void
  onReminderChangeField: (key: string, value: string) => void
  onReminderChangeListItem: (listItemId: string, field: string, value: string | boolean) => void
  onAddCheckItem: () => void
}
