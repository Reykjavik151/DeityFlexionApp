import * as React from "react"
import { FlatList } from "react-native"

import { CheckListItem } from "../"
import { CheckListProps } from "./check-list.props"

export const CheckList: React.FunctionComponent<CheckListProps> = ({
  data,
  onItemChangeText,
  onItemPress,
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <CheckListItem item={item} onChangeText={onItemChangeText} onPress={onItemPress} />
      )}
    />
  )
}
