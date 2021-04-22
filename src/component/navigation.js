import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tab from '../component/tab'
import Login from '../screen/Login'
import About from '../screen/About'
import Profile from '../screen/Profile'

const Stack = createStackNavigator();

export default class navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={'login'} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={'mainmenu'} component={Tab} options={{ headerShown: false }} />
            <Stack.Screen name={'about'} component={About} options={{ headerShown: false }} />
            <Stack.Screen name={'profile'} component={Profile} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
