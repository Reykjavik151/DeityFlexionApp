import { ReminderType } from "../../../utils/types"

export interface ReminderAddProps {
  item: ReminderType
  onBackPress: () => void
  onReminderChangeListItem: (item: any) => void
  onReminderChangeField: (key: string, value: string) => void
  onAddCheckItem: (title: string) => void
}
