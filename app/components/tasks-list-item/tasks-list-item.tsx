import * as React from "react"
import { TouchableOpacity, View } from "react-native"

import STYLES, { getStatusColorStyle } from "./tasks-list-item.styles"
import { TasksListItemProps } from "./tasks-list-item.props"

import { Text } from "../"

export const TasksListItem: React.FunctionComponent<TasksListItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={STYLES.CONTAINER}>
      <Text preset="bold" text={item.title} style={STYLES.TITLE} />
      <View style={[STYLES.STATUS_VIEW, getStatusColorStyle(item.status)]} />
    </TouchableOpacity>
  )
}
