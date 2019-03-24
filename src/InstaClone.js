import React, { Component } from "react";

import {
  MainFeed,
  Login,
  Camera,
  Profile,
  Register
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
