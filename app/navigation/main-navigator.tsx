import React from "react"
// import { Image } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { WelcomeScreen, DemoScreen } from "../screens"
import { Icon } from "../components"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  remindersIcon: {
    height: 30,
    width: 30,
  },
  tasksIcon: {
    height: 30,
    width: 30,
  },
})

export const getTabBarIcon = (icon, style) => () => <Icon icon={icon} style={style} />

export const MainTabNavigator = createBottomTabNavigator(
  {
    tasksTab: {
      screen: DemoScreen,
      navigationOptions: () => ({
        tabBarLabel: "Tasks",
        tabBarIcon: getTabBarIcon("tasks", styles.tasksIcon),
      }),
    },
    reminderTab: {
      screen: WelcomeScreen,
      navigationOptions: () => ({
        tabBarLabel: "Reminders",
        tabBarIcon: getTabBarIcon("reminder", styles.remindersIcon),
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
    // tabBarOptions: {
    //   activeTintColor: "tomato",
    //   inactiveTintColor: "gray",
    // },
  },
)
