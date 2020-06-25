import { ReminderType } from "../../utils/types"

export interface ReminderViewProps {
  reminder: ReminderType
  onChangeReminderField: (key: string, value: string) => void
  onChangeReminderListItem: (listItemId: string, key: string, value: string | boolean) => void
  onAddCheckItem: () => void
  onRemoveCheckItem: (listItemId: string) => void
}
