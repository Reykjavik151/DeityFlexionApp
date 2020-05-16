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

  return <Reminder reminders={reminders} onAddReminder={onAddReminder} />
})
