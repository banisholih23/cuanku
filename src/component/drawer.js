import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screen/About'
import Profile from '../screen/Profile'
import Tab from '../component/tab'
import Navigation from '../component/navigation'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class drawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator>

            {/* <Drawer.Screen name={'root'} component={Navigation} options={{ headerShown: false }} /> */}
            <Drawer.Screen name={'mainmenu'} component={Tab} options={{ headerShown: false }} />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
