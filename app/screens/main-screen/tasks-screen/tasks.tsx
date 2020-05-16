import * as React from "react"

import { TasksProps } from "./tasks.props"
import { Screen, Text } from "../../../components"
import STYLES from "./tasks.styles"

const Tasks: React.FunctionComponent<TasksProps> = ({ tasks, onAddTask }) => {
  return (
    <Screen style={STYLES.ROOT} preset="scroll">
      <Text preset="header" tx="tasksScreen.header" />
    </Screen>
  )
}

export default Tasks
