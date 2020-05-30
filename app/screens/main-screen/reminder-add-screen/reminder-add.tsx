import * as React from "react"
import { StatusBar } from "react-native"

import { ReminderAddProps } from "./reminder-add.props"
import STYLES from "./reminder-add.styles"
import { Screen, ScreenHeader } from "../../../components"

const ReminderAdd: React.FunctionComponent<ReminderAddProps> = ({
  isEdit,
  item,
  onBackPress,
  onReminderChangeField,
  onAddCheckItem,
}) => {
  return (
    <Screen style={STYLES.CONTAINER} preset="fixed">
      <StatusBar barStyle="dark-content" />
      <ScreenHeader tx="addReminderScreen.reminderView" onBackPress={onBackPress} isMinimized />
    </Screen>
  )
}

export default ReminderAdd
