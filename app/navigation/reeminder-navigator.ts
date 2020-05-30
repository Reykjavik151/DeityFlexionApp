import createNativeStackNavigator from "react-native-screens/createNativeStackNavigator"

import { ReminderAddScreen, ReminderScreen } from "../screens"

export const ReminderNavigator = createNativeStackNavigator(
  {
    reminder: {
      screen: ReminderScreen,
    },
    reminderAdd: {
      screen: ReminderAddScreen,
    },
  },
  {
    initialRouteName: "reminder",
    headerMode: "none",
  },
)
