import * as React from "react"
import { FlatList } from "react-native"

import { TasksListProps } from "./tasks-list.props"
import { TasksListItem } from "../"

import STYLES from "./tasks-list.styles"

export const TasksList: React.FunctionComponent<TasksListProps> = ({ data, onItemPress }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <TasksListItem item={item} onPress={() => onItemPress(item)} />}
      keyExtractor={item => `tasks-list-item-${item.id}`}
      contentContainerStyle={STYLES.LIST_CONTENT_CONTAINER}
      style={STYLES.LIST_CONTAINER}
    />
  )
}
