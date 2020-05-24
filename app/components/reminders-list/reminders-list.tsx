import * as React from "react"
import { FlatList } from "react-native"

import { RemindersListItem } from "../"
import { RemindersListProps } from "./reminders-list.props"
import STYLES from "./reminders-list.styles"

export const RemindersList: React.FunctionComponent<RemindersListProps> = ({
  data,
  onItemPress,
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RemindersListItem item={item} onPress={() => onItemPress(item)} />}
      keyExtractor={item => `reminders-list-item-${item.id}`}
      contentContainerStyle={STYLES.LIST_CONTENT_CONTAINER}
      style={STYLES.LIST_CONTAINER}
    />
  )
}
