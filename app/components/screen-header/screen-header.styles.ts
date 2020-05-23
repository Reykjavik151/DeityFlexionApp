import { StyleSheet } from "react-native"
import { spacing, color } from "../../theme"

const STYLES = StyleSheet.create({
  BUTTON_CONTAINER: {
    alignItems: "center",
    backgroundColor: color.palette.orange,
    borderRadius: 16,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
  BUTTON_PLUS_ICON: {},
  CONTAINER: {
    backgroundColor: color.palette.black,
    flexDirection: "row",
    padding: spacing[4],
  },
  TITLE: {
    flex: 1,
  },
})

export default STYLES
