import * as React from "react"
import { View, TouchableOpacity } from "react-native"
import { Icon as IconNativeBase } from "native-base"

import { Icon } from ".."
import { Text } from "../text/text"
import { ScreenHeaderProps } from "./screen-header.props"
import STYLES from "./screen-header.styles"

export const ScreenHeader: React.FunctionComponent<ScreenHeaderProps> = ({
  tx,
  isMinimized = false,
  onBackPress,
  onAddPress,
}) => {
  return (
    <View style={STYLES.CONTAINER}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={STYLES.BUTTON_BACK_CONTAINER}>
          <Icon icon="back" style={STYLES.BUTTON_BACK_ICON} />
        </TouchableOpacity>
      )}
      <Text preset="header" tx={tx} style={STYLES.TITLE} />
      {!isMinimized && (
        <TouchableOpacity onPress={() => onAddPress()} style={STYLES.BUTTON_CONTAINER}>
          <IconNativeBase type="MaterialIcons" name="add" style={STYLES.BUTTON_PLUS_ICON} />
        </TouchableOpacity>
      )}
    </View>
  )
}
