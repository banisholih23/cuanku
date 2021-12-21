import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';

import Home from '../screen/HomePage'
import Gold from '../screen/Gold'
import Gofx from '../screen/Gofx'
import Crypto from '../screen/Crypto'
import Otc from '../screen/Otc'
import Balance from '../screen/Balance'
import LocalNotification from '../screen/LocalNotif/index'

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
          <Stack.Navigator
            screenOptions={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          >
            <Stack.Screen name={'home'} component={Home} options={{ headerShown: false }} />
            <Stack.Screen name={'gold'} component={Gold}
              options={{
                title: 'Gold',
                headerStyle: {
                  backgroundColor: '#F2F2F2'
                }
              }}
            />
            <Stack.Screen name={'gofx'} component={Gofx}
              options={{
                title: 'GOFX',
                headerStyle: {
                  backgroundColor: '#F2F2F2'
                }
              }} 
            />
            <Stack.Screen name={'crypto'} component={Crypto}
              options={{
                title: 'Crypto',
                headerStyle: {
                  backgroundColor: '#F2F2F2'
                }
              }} 
            />
            <Stack.Screen name={'otc'} component={Otc}
              options={{
                title: 'OTC',
                headerStyle: {
                  backgroundColor: '#F2F2F2'
                }
              }}
            />
            <Stack.Screen name={'balance'} component={Balance}
              options={{
                title: 'Balance',
                headerStyle: {
                  backgroundColor: '#F2F2F2'
                }
              }}
            />
            <Stack.Screen name={'localnotif'} component={LocalNotification}
              options={{
                title: 'Loacal Notif',
                headerStyle: {
                  backgroundColor: '#F2F2F2'
                }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
