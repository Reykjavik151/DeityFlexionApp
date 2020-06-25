import * as React from "react"
import { FlatList, TouchableOpacity, Text } from "react-native"

import STYLES from "./check-list.styles"
import { CheckListItem } from "../"
import { CheckListProps } from "./check-list.props"

export const CheckList: React.FunctionComponent<CheckListProps> = ({
  data,
  onItemChangeText,
  onItemPress,
  onAddCheckItem,
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <CheckListItem item={item} onChangeText={onItemChangeText} onPress={onItemPress} />
      )}
      ListFooterComponent={
        <TouchableOpacity onPress={onAddCheckItem} style={STYLES.plusButtonContainer}>
          <Text style={STYLES.plusButtonText}>+</Text>
        </TouchableOpacity>
      }
    />
  )
}
