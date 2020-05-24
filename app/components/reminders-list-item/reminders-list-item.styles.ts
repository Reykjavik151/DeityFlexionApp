import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const STYLES = StyleSheet.create({
  CONTAINER: {
    alignItems: "center",
    backgroundColor: color.palette.black,
    borderRadius: 12,
    marginTop: 12,
    padding: spacing[4],
  },
  TITLE: {
    color: color.palette.white,
    flex: 1,
  },
})

export default STYLES
