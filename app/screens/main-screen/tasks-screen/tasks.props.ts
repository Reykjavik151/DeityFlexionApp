import { TaskType } from "../../../utils/types"

export interface TasksProps {
  tasks: TaskType[]
  onTaskPress: (task: TaskType) => void
  onAddPress: () => void
}
