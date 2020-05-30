import { ReminderType } from "../../../utils/types"

export interface ReminderAddProps {
  isEdit: boolean
  item: ReminderType
  onBackPress: () => void
  onReminderChangeField: (key: string, value: string) => void
  onAddCheckItem: (title: string) => void
}
