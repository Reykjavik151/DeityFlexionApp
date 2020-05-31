import * as React from "react"
import { TextInput, TouchableOpacity } from "react-native"

import { DefaultTextInputProps } from "./default-text-input.props"
import STYLES from "./default-text-input.styles"
import { color } from "../../theme"

export const DefaultTextInput: React.FunctionComponent<DefaultTextInputProps> = props => {
  const inputRef = React.useRef(null)

  const focusInput = () => inputRef.current.focus()

  return (
    <TouchableOpacity
      style={[STYLES.CONTAINER, props.containerStyle]}
      activeOpacity={1}
      onPress={focusInput}
    >
      <TextInput
        placeholderTextColor={color.palette.lightGrey}
        {...props}
        style={[STYLES.INPUT, props.style]}
      />
    </TouchableOpacity>
  )
}
