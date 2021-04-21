import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tab from '../component/tab'

const Stack = createStackNavigator()

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
            <Stack.Screen component={Tab} name={'mainmenu'} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
