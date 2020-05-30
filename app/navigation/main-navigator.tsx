import React from "react"
import { StyleSheet, ImageStyle } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs"

import { ReminderNavigator } from "./reeminder-navigator"
import { TasksScreen } from "../screens"

import { Icon } from "../components"
import { IconTypes } from "../components/icon/icons"
import { color } from "../theme"

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
  remindersIcon: {
    height: 25,
    width: 25,
  },
  tabBar: {
    backgroundColor: color.palette.black,
  },
  tasksIcon: {
    height: 25,
    width: 25,
  },
})

export const getTabBarIcon = (
  unactiveIcon: IconTypes,
  activeIcon: IconTypes,
  style: ImageStyle,
) => ({ focused }) => <Icon icon={focused ? activeIcon : unactiveIcon} style={style} />

export const MainTabNavigator = createBottomTabNavigator(
  {
    tasksTab: {
      screen: TasksScreen,
      navigationOptions: () => ({
        tabBarLabel: "Tasks",
        tabBarIcon: getTabBarIcon("tasksBlue", "tasksOrange", styles.tasksIcon),
      }),
    },
    reminderTab: {
      screen: ReminderNavigator,
      navigationOptions: () => ({
        tabBarLabel: "Reminders",
        tabBarIcon: getTabBarIcon("bookmarkBlue", "bookmarkOrange", styles.remindersIcon),
      }),
    },
  },
  {
    initialRouteName: "tasksTab",
    // defaultNavigationOptions: ({ navigation }) => ({
    //   // tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //   //   // You can return any component that you like here!
    //   //   return <Text>{`Hello, ${tintColor}`}</Text>
    //   // },
    // }),
    tabBarOptions: {
      style: styles.tabBar,
      labelStyle: styles.label,
      activeTintColor: color.palette.orange,
      inactiveTintColor: color.palette.blue,
    },
  },
)
