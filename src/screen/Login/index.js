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

import {connect} from 'react-redux';
import {loginBroker} from '../../redux/actions/auth'

import AnimatedSplash from 'react-native-animated-splash-screen';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoaded: false,
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
        .catch(function(error) {
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
  componentDidMount() {
    setTimeout(this.loading, 3000);
  }
  render() {
    const {isLoaded} = this.state;
    const {isLoading} = this.props.auth;
    return (
      <>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {isLoaded ? (
          <View style={loginStyle.fill}>
            <Image style={loginStyle.accent1} />
            <View style={loginStyle.accent2}>
              <View style={loginStyle.contentUp}>
                <View style={{ flexDirection: "row", margin: 5 }}>
                  <Image style={{height: 47, width: 125, marginTop: 5, marginRight: 5}}></Image>
                  <Image style={{height: 55, width: 125}}></Image>
                </View>
                {/* <Text style={loginStyle.title}>ICDX</Text> */}
                <Text style={loginStyle.subTitle}>Indonesia Commodity And Derivatives Exchange</Text>
              </View>
              <View style={loginStyle.formWrap}>
                <View>
                  <TextInput
                    onChangeText={e => {
                      this.setState({ username: e });
                    }}
                    style={loginStyle.input}
                    placeholder="Username"
                    placeholderTextColor="black"
                  />
                  <TextInput
                    onChangeText={e => {
                      this.setState({ password: e });
                    }}
                    style={loginStyle.input}
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="black"
                  />
                </View>
                <View style={loginStyle.footer2}>
                  <TouchableOpacity>
                    <Text style={loginStyle.footerText}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
                <View style={loginStyle.btnWrapper}>
                  <TouchableOpacity
                    style={loginStyle.btnLogin}
                    onPress={this.signin}>
                    <Text style={loginStyle.btnTextRegister}>LOGIN</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={loginStyle.btnRegister}
                    onPress={this.regist}>
                    <Text style={loginStyle.btnTextRegister}>REGISTER</Text>
                  </TouchableOpacity>
                </View>
                <View style={loginStyle.footer}>
                  <TouchableOpacity onPress={this.signup}>
                    <Text style={loginStyle.footerText}>
                      I don't have any account
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <AnimatedSplash
            translucent={true}
            isLoaded={this.state.isLoaded}
            logoImage={require('../../assets/image/logo.png')}
            backgroundColor={'white'}
            logoHeight={150}
            logoWidht={150}
          />
        )}
      </>
    );
  }
}

const mapDispatchToProps = {loginBroker};
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
    width: 200,
    height: 80,
    width: deviceWidth,
    height: deviceHeight,
    alignItems: 'center',
    paddingTop: 50,
    position: 'absolute',
    zIndex: 1,
  },
  title: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  contentUp: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  subTitle: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'black',
    fontSize: 20,
    letterSpacing: 3,
  },
  formWrap: {
    width: 250,
    height: 270,
    marginTop: 40,
  },
  input: {
    borderBottomWidth: 4,
    borderBottomColor: '#CFD0D4',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 30,
    color: 'black',
  },
  btnWrapper: {
    marginTop: 80,
  },
  btnLogin: {
    marginTop: 10,
    width: 250,
    height: 40,
    backgroundColor: '#F16912',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextLogin: {
    fontWeight: 'bold',
    color: '#F16912',
    letterSpacing: 3,
  },
  btnLogin: {
    marginTop: 10,
    width: 250,
    height: 40,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F16912'
  },
  btnRegister: {
    marginTop: 10,
    width: 250,
    height: 40,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F16912'
  },
  btnTextRegister: {
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 3,
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