import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert
} from 'react-native';

import { connect } from 'react-redux';
import { loginBroker } from '../../redux/actions/auth'

import { Picker } from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class index extends Component {

  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoaded: false,
      trader: '',
    };
  }
  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signin = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    if (data.username === '' || data.password === '') {
      Alert.alert('Ooops!', 'Please fill all the form :(');
    } else {
      this.props
        .loginBroker(data)
        .then(response => {
          this.props.navigation.navigate('mainmenu');
        })
        .catch(function (error) {
          Alert.alert('Incorrect Data!', 'Wrong username or password :(');
        });
    }
  };

  dashboard = () => {
    this.props.navigation.navigate('mainmenu');
  };

  regist = () => {
    this.props.navigation.navigate('regist');
  };

  loading = () => {
    this.setState({ isLoaded: true });
  };

  handleChangeOption(val) {
    if (val !== 0) {
      this.setState({ trader: val });
    }
  }

  render() {
    const { isLoaded } = this.state;
    // const { isLoading } = this.props.auth;

    const trader = [
      { id: 1, name: 'Trader App 1' },
      { id: 2, name: 'Trader App 2' },
      { id: 3, name: 'Trader App 3' },
      { id: 4, name: 'Trader App 4' },
      { id: 5, name: 'Trader App 5' },
    ]

    let traderMap = trader.map((item, index) => {
      return (
        <Picker.Item
          key={item.id.toString()}
          value={item.id}
          label={item.name}
        />
      );
    });

    console.log('array trader', traderMap)

    return (
      <>
        <StatusBar backgroundColor="#F2F2F2" barStyle="dark-content" />
        <View style={loginStyle.fill}>
          <Image style={loginStyle.accent1} />
          <View style={loginStyle.accent2}>
            <View style={loginStyle.contentUp}>
              {/* <View style={{ flexDirection: "row", margin: 5 }}>
                  <Image style={{ height: 47, width: 125, marginTop: 5, marginRight: 5 }}></Image>
                  <Image style={{ height: 55, width: 125 }}></Image>
                </View> */}
              <View style={loginStyle.viewLogo}>
                <Text style={loginStyle.textEgold}>e-Citra</Text>
              </View>
              {/* <Text style={loginStyle.title}>ICDX</Text> */}
              <Text style={loginStyle.subTitle}>Trade Balance Check</Text>
              <View style={loginStyle.desc}>
                <Text style={loginStyle.textDesc}>Select your Trading App and insert your Client/Customer ID to check your gold balance.</Text>
              </View>
            </View>
            <View style={loginStyle.formWrapper}>
              {/* <Text style={loginStyle.formTitle}>Trader</Text> */}
              <Picker
                style={{ width: deviceWidth - 87, color: 'black' }}
                selectedValue={this.state.trader}
                onValueChange={e => {
                  this.setState({ trader: e });
                  console.log(e)
                }}>
                <Picker.Item label="Please select trader.." value="" />
                {traderMap}
              </Picker>
            </View>
            <View style={loginStyle.formWrap}>
              <View>
                {/* <TextInput
                    onChangeText={e => {
                      this.setState({ username: e });
                    }}
                    style={loginStyle.input}
                    placeholder="Client ID"
                    placeholderTextColor="#717171"
                  /> */}
                {/* <View style={loginStyle.viewClient}>
                    <Text style={loginStyle.textClient}>Client ID</Text>
                  </View> */}
                <View style={loginStyle.viewInput}>
                  <Input
                    placeholder='type here...'
                    label='Client ID'
                    leftIcon={
                      <Icon
                        name='user'
                        size={24}
                        color='black'
                      />
                    }
                    onChangeText={value => this.setState({ comment: value })}
                  />
                </View>

              </View>
              <View style={loginStyle.btnWrapper}>
                <TouchableOpacity
                  style={loginStyle.btnLogin}
                  onPress={this.signin}>
                  <Text style={loginStyle.btnTextRegister}>Check Balance</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const mapDispatchToProps = { loginBroker };
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(index);

const loginStyle = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 0,
  },
  accent2: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: 'center',
    paddingTop: 70,
    position: 'absolute',
    zIndex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  contentUp: {
    // marginLeft: 20,
    // marginRight: 20,
  },
  viewLogo: {
    alignItems: 'center',
    paddingBottom: 30
  },
  textEgold: {
    fontSize: 30,
    color: '#6AA0BA',
    fontWeight: 'bold'
  },
  subTitle: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'black',
    fontSize: 25,
  },
  desc: {
    paddingTop: 10,
  },
  textDesc: {
    fontSize: 18,
    color: '#717171'
  },
  formWrap: {
    width: deviceWidth - 100,
    // marginTop: 40,
  },
  viewInput: {
    marginTop: 10
  },
  input: {
    borderBottomWidth: 4,
    borderBottomColor: '#CFD0D4',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    color: 'black',
    fontSize: 18
  },
  formWrapper: {
    marginTop: 14,
  },
  formTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  btnWrapper: {
    marginTop: 5,
    alignItems: 'center'
  },
  btnTextLogin: {
    fontWeight: 'bold',
    color: '#F16912',
    letterSpacing: 3,
  },
  btnLogin: {
    width: deviceWidth - 90,
    height: 40,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6AA0BA'
  },
  btnTextRegister: {
    fontWeight: 'bold',
    color: 'white',
    // letterSpacing: 3,
    fontSize: 16
  },
  footer: {
    marginTop: 60,
    alignItems: 'center',
  },
  footer2: {
    marginTop: 30,
    alignItems: 'flex-end',
  },
  footerText: {
    color: 'black',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});