// import React from "react"
// import { Image } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { WelcomeScreen, DemoScreen } from "../screens"
// import { Text } from "../components"

export const MainTabNavigator = createBottomTabNavigator(
  {
    welcomeTab: { screen: WelcomeScreen },
    demoTab: { screen: DemoScreen },
  },
  {
    initialRouteName: "welcomeTab",
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
