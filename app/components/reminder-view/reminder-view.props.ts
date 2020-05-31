import { ReminderType } from "../../utils/types"

export interface ReminderViewProps {
  reminder: ReminderType
  onChangeReminderField: (key: string, value: string) => void
}
