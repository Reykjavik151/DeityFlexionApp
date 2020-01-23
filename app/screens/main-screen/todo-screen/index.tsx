import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
// import { useStores } from "../models/root-store"
import { color } from "../../../theme"
import { NavigationInjectedProps } from "react-navigation"

export interface TodoScreenProps extends NavigationInjectedProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const TodoScreen: React.FunctionComponent<TodoScreenProps> = observer(props => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" tx="todoScreen.header" />
    </Screen>
  )
})
