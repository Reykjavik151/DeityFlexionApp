import { TaskType } from "../../../utils/types"

export interface TasksProps {
  tasks: TaskType[]
  onAddTask: (title: string) => void
}
