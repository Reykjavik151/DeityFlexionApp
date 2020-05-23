import { TaskType } from "../../utils/types"

export interface TasksListProps {
  data: TaskType[]
  onItemPress: (task: TaskType) => void
}
