import * as React from "react"
import { TouchableOpacity } from "react-native"

import STYLES from "./reminders-list-item.styles"
import { RemindersListItemProps } from "./reminders-list-item.props"

import { Text } from "../"

export const RemindersListItem: React.FunctionComponent<RemindersListItemProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={STYLES.CONTAINER}>
      <Text preset="bold" text={item.title} style={STYLES.TITLE} />
      {item.description && <Text preset="fieldLabel" text={item.description} />}
    </TouchableOpacity>
  )
}
