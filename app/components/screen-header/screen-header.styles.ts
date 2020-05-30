import { StyleSheet } from "react-native"
import { spacing, color } from "../../theme"

const STYLES = StyleSheet.create({
  BUTTON_BACK_CONTAINER: {
    alignItems: "center",
    height: 32,
    justifyContent: "center",
    marginRight: spacing[2],
    width: 32,
  },
  BUTTON_BACK_ICON: {
    height: 20,
    width: 20,
  },
  BUTTON_CONTAINER: {
    alignItems: "center",
    backgroundColor: color.palette.orange,
    borderRadius: 16,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
  BUTTON_PLUS_ICON: {
    color: color.palette.white,
    fontSize: 23,
  },
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
