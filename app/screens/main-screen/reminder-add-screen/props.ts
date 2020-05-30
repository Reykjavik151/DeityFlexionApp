import { NavigationInjectedProps } from "react-navigation"
import { ReminderType } from "../../../utils/types"

interface NavParams {
  item: ReminderType
  onSaveReminder: (reminder: ReminderType) => void
}

export interface ReminderAddScreenProps extends NavigationInjectedProps<NavParams> {}
