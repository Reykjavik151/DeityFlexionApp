import * as React from "react"
import { View, TouchableOpacity } from "react-native"
import { Icon } from "native-base"

import { Text } from "../text/text"
import { ScreenHeaderProps } from "./screen-header.props"
import STYLES from "./screen-header.styles"

export const ScreenHeader: React.FunctionComponent<ScreenHeaderProps> = ({ tx, onAddPress }) => {
  return (
    <View style={STYLES.CONTAINER}>
      <Text preset="header" tx={tx} style={STYLES.TITLE} />
      <TouchableOpacity onPress={() => onAddPress()} style={STYLES.BUTTON_CONTAINER}>
        <Icon type="MaterialIcons" name="add" style={STYLES.BUTTON_PLUS_ICON} />
      </TouchableOpacity>
    </View>
  )
}
