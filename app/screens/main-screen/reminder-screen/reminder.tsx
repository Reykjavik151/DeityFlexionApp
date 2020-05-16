import * as React from "react"

import { Screen, Text } from "../../../components"
import { ReminderProps } from "./reminder.props"
import STYLES from "./reminder.styles"

const Reminder: React.FunctionComponent<ReminderProps> = ({ reminders, onAddReminder }) => {
  return (
    <Screen style={STYLES.ROOT} preset="scroll">
      <Text preset="header" tx="tasksScreen.header" />
    </Screen>
  )
}

export default Reminder
