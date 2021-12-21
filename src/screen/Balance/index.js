import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Crypto = () => {
    this.props.navigation.navigate('crypto');
  }

  LocalNtf = () => {
    this.props.navigation.navigate('localnotif');
  }

  render() {
    return (
      <>
        <StatusBar ackgroundColor="#F2F2F2" barStyle="dark-content" />
        <View style={balance.fill} >
          <View style={balance.accent}>
            <View style={balance.content}>
              <Text style={balance.text}>Gold Balance Check</Text>
              <Text style={balance.text2}>This is your trade balance information.</Text>
              <View style={balance.line}></View>
              <View style={balance.result}>
                <View style={balance.row} >
                  <Text style={balance.text3}>Trader Name</Text>
                  <Text style={balance.textRight}>Bani Sholih</Text>
                </View>
                <View style={balance.line}></View>
                <View style={balance.row} >
                  <Text style={balance.text3}>Client ID</Text>
                  <Text style={balance.textRight}>PWBWC6Frum48dVNs</Text>
                </View>
                <View style={balance.line}></View>
                <View style={balance.row} >
                  <Text style={balance.text3}>Balance</Text>
                  <Text style={balance.textRight}>9,0 gr</Text>
                </View>
                <View style={balance.line}></View>
                <View style={balance.goBack}>
                  <TouchableOpacity onPress={this.Crypto}>
                    <Text style={balance.goBackText}>Go back to previous page</Text>
                  </TouchableOpacity>
                </View>
                <View style={balance.goBack}>
                  <TouchableOpacity onPress={this.LocalNtf}>
                    <Text style={balance.goBackText}>Go to Local Notif</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const balance = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative'
  },
  accent: {
    paddingTop: 50,
    zIndex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  content: {
    // alignItems: 'center',
    margin: 30,
    paddingTop: 30
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#6AA0BA'
  },
  text2: {
    fontSize: 14,
    color: '#717171'
  },
  text3: {
    fontSize: 18,
    color: '#717171',
    paddingTop: 10,
  },
  line: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 3,
    width: 310,
    paddingTop: 10
  },
  row: {
    flexDirection: 'row',
  },
  textRight: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6AA0BA',
    paddingTop: 10,
    marginLeft: 'auto'
  },
  result: {
    paddingTop: 10
  },
  goBack: {
    paddingTop: 10
  },
  goBackText: {
    color: '#6AA0BA',
    fontSize: 14
  }
})
