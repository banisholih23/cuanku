import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Dashboard from '../screen/HomePage'
import About from '../screen/About'
import Profile from '../screen/Profile'

const BottomTab = createBottomTabNavigator();

export default class tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: '#F16912',
        }}
      >
        <BottomTab.Screen
          options={{
            title: 'Home',
            activeTintColor: 'red',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color='#F16912' size={size} />
            ),
          }}
          component={Dashboard}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'About',
            tabBarIcon: ({ color, size }) => (
              <Icon name="address-card" color='#F16912' size={size} />
            ),
          }}
          component={About}
          name="profil"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="id-badge" color='#F16912' size={size} />
            ),
          }}
          component={Profile}
          name="about"
        />
      </BottomTab.Navigator>
    );
  }
}
