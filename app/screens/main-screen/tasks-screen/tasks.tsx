import * as React from "react"
import { StatusBar } from "react-native"

import { TasksProps } from "./tasks.props"
import { Screen, ScreenHeader, TasksList } from "../../../components"
import STYLES from "./tasks.styles"
import { TASKS_DUMMY } from "./dummy"

const Tasks: React.FunctionComponent<TasksProps> = ({ tasks, onTaskPress, onAddPress }) => {
  return (
    <Screen style={STYLES.ROOT} preset="fixed">
      <StatusBar barStyle="dark-content" />
      <ScreenHeader tx="tasksScreen.tasks" onAddPress={onAddPress} />
      <TasksList data={TASKS_DUMMY} onItemPress={onTaskPress} />
    </Screen>
  )
}

export default Tasks
