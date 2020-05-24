import * as React from "react"
import { observer } from "mobx-react-lite"

// import { useStores } from "../models/root-store"
import { ReminderScreenProps } from "./props"
import Reminder from "./reminder"
import { REMINDERS_DUMMY } from "./dummy"
import { ReminderType } from "../../../utils/types"

export const ReminderScreen: React.FunctionComponent<ReminderScreenProps> = observer(() => {
  // const { someStore } = useStores()
  const [reminders, setReminders] = React.useState(REMINDERS_DUMMY)

  const onAddReminder = (title: string, description: string) => {
    const newTask: ReminderType = {
      id: "1",
      title,
      description,
      createdAt: new Date(),
      list: [],
    }

    setReminders([...reminders, newTask])
  }

  const onAddPress = () => {
    console.tron.log("On add reminders press")
  }

  const onReminderPress = (reminder: ReminderType) => {
    console.tron.log("onReminderPress", reminder)
  }

  return (
    <Reminder reminders={reminders} onAddPress={onAddPress} onReminderPress={onReminderPress} />
  )
})
