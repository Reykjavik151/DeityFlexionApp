import * as React from "react"
import { FlatList } from "react-native"
import R from "ramda"

import { TasksListProps } from "./tasks-list.props"
import { TasksListItem } from "../"

import STYLES from "./tasks-list.styles"
import { TaskType } from "../../utils/types"

export const TasksList: React.FunctionComponent<TasksListProps> = ({ data, onItemPress }) => {
  const sortByStatus = R.sortWith<TaskType>([R.descend(R.prop("status"))])

  return (
    <FlatList
      data={sortByStatus(data)}
      renderItem={({ item }) => <TasksListItem item={item} onPress={() => onItemPress(item)} />}
      keyExtractor={item => `tasks-list-item-${item.id}`}
      contentContainerStyle={STYLES.LIST_CONTENT_CONTAINER}
      style={STYLES.LIST_CONTAINER}
    />
  )
}
