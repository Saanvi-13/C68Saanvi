import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FacebookScreen from './screens/FacebookScreen';
import InstagramScreen from './screens/InstagramScreen';
import { render } from 'react-dom';


export default class App extends React.Component {
  render(){
    return (
    <AppContainer/>
      );
  }
 
}
const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen}
});
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
