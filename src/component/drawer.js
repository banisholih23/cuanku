import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import About from '../screen/About'
import Profile from '../screen/Profile'
import Tab from '../component/tab'

const Drawer = createDrawerNavigator();

export default class drawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Tab} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
