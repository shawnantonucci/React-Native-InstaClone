import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { MainFeed, Login, Camera, Profile } from './components/screens';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
});

const MainStack = createSwitchNavigator({
  login: Login,
  main: Tabs
});

const AppContainer = createAppContainer(MainStack);

class InstaClone extends Component{
  render(){
    return <AppContainer/>;
  }
}

export default InstaClone;