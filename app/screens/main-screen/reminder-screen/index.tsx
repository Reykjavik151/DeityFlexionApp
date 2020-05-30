import * as React from "react"
import { observer } from "mobx-react-lite"

// import { useStores } from "../models/root-store"
import { ReminderScreenProps } from "./props"
import Reminder from "./reminder"
import { REMINDERS_DUMMY } from "./dummy"
import { ReminderType } from "../../../utils/types"

export const ReminderScreen: React.FunctionComponent<ReminderScreenProps> = observer(
  ({ navigation }) => {
    // const { someStore } = useStores()
    const [reminders, setReminders] = React.useState(REMINDERS_DUMMY)

    const onAddReminder = (newReminder: ReminderType) => setReminders([...reminders, newReminder])

    const onAddPress = () => {
      navigation.navigate("reminderAdd", { onSaveReminder: onAddReminder })
    }

    const onReminderPress = (reminder: ReminderType) => {
      navigation.navigate("reminderAdd", { item: reminder })
    }

    return (
      <Reminder reminders={reminders} onAddPress={onAddPress} onReminderPress={onReminderPress} />
    )
  },
)
