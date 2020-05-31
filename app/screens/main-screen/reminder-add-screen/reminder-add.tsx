import * as React from "react"
import { StatusBar } from "react-native"

import { ReminderAddProps } from "./reminder-add.props"
import STYLES from "./reminder-add.styles"
import { Screen, ScreenHeader, ReminderView } from "../../../components"

const ReminderAdd: React.FunctionComponent<ReminderAddProps> = ({
  item,
  onBackPress,
  onReminderChangeField,
  onAddCheckItem,
}) => {
  return (
    <Screen style={STYLES.CONTAINER} preset="fixed">
      <StatusBar barStyle="dark-content" />
      <ScreenHeader tx="addReminderScreen.reminderView" onBackPress={onBackPress} isMinimized />
      <ReminderView reminder={item} onChangeReminderField={onReminderChangeField} />
    </Screen>
  )
}

export default ReminderAdd
