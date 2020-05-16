import * as React from "react"
import { observer } from "mobx-react-lite"

import { TaskType } from "../../../utils/types"
import { TasksScreenProps } from "./props"
import Tasks from "./tasks"
import { ITEM_STATUS } from "../../../utils/constants"
import { TASKS_DUMMY } from "./dummy"
// import { useStores } from "../models/root-store"

export const TasksScreen: React.FunctionComponent<TasksScreenProps> = observer(() => {
  const [tasks, setTasks] = React.useState(TASKS_DUMMY)

  const onAddTask = (title: string) => {
    const newTask: TaskType = {
      id: "1",
      title,
      createdAt: new Date(),
      status: ITEM_STATUS.none,
    }

    setTasks([...tasks, newTask])
  }

  // const { someStore } = useStores()
  return <Tasks tasks={tasks} onAddTask={onAddTask} />
})
