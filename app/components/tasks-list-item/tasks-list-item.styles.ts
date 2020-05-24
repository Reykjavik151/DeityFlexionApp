import { StyleSheet, ViewStyle } from "react-native"
import { color, spacing } from "../../theme"
import { ITEM_STATUS } from "../../utils/constants"

const STYLES = StyleSheet.create({
  CONTAINER: {
    alignItems: "center",
    backgroundColor: color.palette.black,
    borderRadius: 12,
    flexDirection: "row",
    marginTop: 12,
    padding: spacing[4],
  },
  STATUS_VIEW: {
    borderRadius: 6,
    height: 12,
    marginLeft: 12,
    width: 12,
  },
  TITLE: {
    color: color.palette.white,
    flex: 1,
  },
})

export const getStatusColorStyle = (status: keyof typeof ITEM_STATUS): ViewStyle => {
  const resultStyle: ViewStyle = {
    backgroundColor: null,
  }

  switch (status) {
    default:
    case ITEM_STATUS.none:
      resultStyle.backgroundColor = color.palette.offWhite
      break
    case ITEM_STATUS.completed:
      resultStyle.backgroundColor = color.palette.green
      break
    case ITEM_STATUS.canceled:
      resultStyle.backgroundColor = color.palette.red
      break
  }

  return resultStyle
}

export default STYLES
