import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  MainFeed,
  Login,
  Camera,
  Profile,
  Register,
  Home
} from "./components/screens";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
});

const IntroStack = createStackNavigator({
  login: Login,
  register: Register
});


const MainNavigator = createSwitchNavigator({
  intro: IntroStack,
  main: Tabs
});

const AppContainer = createAppContainer(MainNavigator);

class InstaClone extends Component {
  render() {
    return <AppContainer />;
  }
}

export default InstaClone;
