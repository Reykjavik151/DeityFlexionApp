import * as React from "react"
import { StatusBar } from "react-native"

import { Screen, ScreenHeader, RemindersList } from "../../../components"
import { ReminderProps } from "./reminder.props"
import STYLES from "./reminder.styles"

const Reminder: React.FunctionComponent<ReminderProps> = ({
  reminders,
  onAddPress,
  onReminderPress,
}) => {
  return (
    <Screen style={STYLES.ROOT} preset="fixed">
      <StatusBar barStyle="dark-content" />
      <ScreenHeader tx="remindersScreen.reminders" onAddPress={onAddPress} />
      <RemindersList data={reminders} onItemPress={onReminderPress} />
    </Screen>
  )
}

export default Reminder
