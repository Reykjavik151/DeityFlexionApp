import * as React from "react"
import { View, TouchableOpacity } from "react-native"

import { DefaultTextInput } from "../"
import { CheckListItemProps } from "./check-list-item.props"
import STYLES from "./check-list-item.styles"

export const CheckListItem: React.FunctionComponent<CheckListItemProps> = ({
  item,
  onChangeText,
  onPress,
}) => (
  <View style={STYLES.CONTAINER}>
    <TouchableOpacity
      style={item.isDone ? STYLES.SELECTED_VIEW : STYLES.UNSELECTED_VIEW}
      onPress={() => onPress(item.id, !item.isDone)}
    />
    <DefaultTextInput
      multiline
      scrollEnabled={false}
      value={item.title}
      onChangeText={(value: string) => onChangeText(item.id, value)}
      containerStyle={STYLES.INPUT}
    />
  </View>
)
