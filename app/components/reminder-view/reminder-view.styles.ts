import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"
// import { spacing, color } from "../../theme"

const STYLES = StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.palette.black,
    borderRadius: 8,
    flex: 1,
    margin: spacing[3],
    padding: spacing[3],
  },
  DIVIDER: {
    backgroundColor: color.palette.white,
    borderRadius: 4,
    height: 3,

    marginVertical: spacing[3],
    width: "100%",
  },
  TITLE_INPUT: {
    fontSize: 20,
    fontWeight: "bold",
  },
})

export default STYLES
