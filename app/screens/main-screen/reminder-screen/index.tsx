import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import { Screen, Text } from "../../../components"
// import { useStores } from "../models/root-store"
import { color } from "../../../theme"
import { NavigationInjectedProps } from "react-navigation"

export interface ReminderScreenProps extends NavigationInjectedProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}
const HEADER_TEXT: TextStyle = {
  color: color.palette.blue,
}

export const ReminderScreen: React.FunctionComponent<ReminderScreenProps> = observer(props => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" tx="reminderScreen.header" style={HEADER_TEXT} />
    </Screen>
  )
})
