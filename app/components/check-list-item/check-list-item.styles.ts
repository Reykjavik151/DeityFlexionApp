import { StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const CHECK_VIEW = {
  borderRadius: 12,
  height: 24,
  marginRight: spacing[3],
  width: 24,
  borderColor: color.palette.lighterGrey,
  borderWidth: 2,
}

const STYLES = StyleSheet.create({
  CONTAINER: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    paddingVertical: spacing[1],
    width: "100%",
  },
  INPUT: {
    color: color.palette.offWhite,
    flex: 1,
    fontSize: 15,
  },
  SELECTED_VIEW: {
    ...CHECK_VIEW,
    backgroundColor: color.palette.orange,
  },
  UNSELECTED_VIEW: {
    ...CHECK_VIEW,
    backgroundColor: color.transparent,
  },
})

export default STYLES
