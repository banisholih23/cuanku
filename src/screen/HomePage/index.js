import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, Button, TouchableOpacity } from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';

import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Icon } from 'react-native-elements'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  loading = () => {
    this.setState({ isLoaded: true });
  };

  Gofx = () => {
    this.props.navigation.navigate('gofx');
  }

  Crypto = () => {
    this.props.navigation.navigate('crypto');
  }

  Otc = () => {
    this.props.navigation.navigate('otc');
  }

  Gold = () => {
    this.props.navigation.navigate('gold');
  }

  componentDidMount() {
    setTimeout(this.loading, 3000);
  }

  render() {
    const { isLoaded } = this.state
    return (
      <>
        <StatusBar backgroundColor="#38C3FA" barStyle="light-content" />
        {isLoaded ? (
          <View style={style.fill}>
            <Image source={require('../../assets/image/image.png')} style={style.accent1} />
            <View style={style.accent2}>
              <View style={style.header}>
                <Text style={style.headerTitle}>e-Citra</Text>
                <Text style={style.headerDesc}>Clearing Info Of Trade</Text>
              </View>
              <View style={style.content}>
                <View elevation={5} style={style.border}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={style.circle}>
                      <Icon name="eye" color='#09A7E8' size={18} />
                    </View>
                    <View style={style.container}>
                      <Text style={style.title}>Transparent</Text>
                    </View>
                  </View>
                </View>
                <View style={style.border}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={style.circle}>
                      <Icon name="check" color='#09A7E8' size={18} />
                    </View>
                    <View style={style.container}>
                      <Text style={style.title}>Fairness</Text>
                    </View>
                  </View>
                </View>
                <View style={style.border}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={style.circle}>
                      <Icon name="dot-circle" color='#09A7E8' size={18} />
                    </View>
                    <View style={style.container}>
                      <Text style={style.title}>Integrity</Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ fontSize: 15, color: 'white' }}>Choose what do you want</Text>
                </View>
                {/* <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                  <View style={style.borderMenuGfx}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={style.contentMenu}>
                        <Text style={style.textMenu}>GOFX</Text>
                      </View>
                      <View style={style.borderContainer}>
                        <Image style={{ height: 30, width: 68, marginTop: 30 }} source={require('../../assets/image/GOFX.png')} />
                      </View>
                    </View>
                  </View>
                  <View style={style.borderMenuOtc}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={style.contentMenu}>
                        <Text style={style.textMenu}>OTC</Text>
                      </View>
                      <View style={style.borderContainer}>
                        <Image style={{ height: 60, width: 65, marginTop: 10, marginLeft: 15 }} source={require('../../assets/image/OTC.png')} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={style.borderMenuCrypto}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={style.contentMenu}>
                        <Text style={style.textMenu}>Crypto</Text>
                      </View>
                      <View style={style.borderContainer}>
                        <Image style={{ height: 60, width: 65, marginTop: 10 }} source={require('../../assets/image/crypto.png')} />
                      </View>
                    </View>
                  </View>
                  <View style={style.borderMenuGold}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={style.contentMenu}>
                        <Text style={style.textMenu}>Gold</Text>
                      </View>
                      <View style={style.borderContainer}>
                        <Image style={style.imageMenu} source={require('../../assets/image/gold-resize.png')} />
                      </View>
                    </View>
                  </View>
                </View> */}
                <View style={style.borderMenuAll}>
                  <View style={{ marginTop: 7 }}>
                    <TouchableOpacity onPress={this.Gofx}>
                      <View style={style.containerGofx}>
                        <Image style={style.imageGofx} source={require('../../assets/image/GOFX.png')} />
                        <View style={style.contentGofx}>
                          <Text style={style.titleGofx}>GOFX</Text>
                          <Text style={style.descGofx}>Check Gofx Account</Text>
                        </View>
                        <View style={style.rightGofx}>
                          <Icon name="angle-right" color='black' size={18} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={style.LineGOFX}></View>
                    <TouchableOpacity onPress={this.Otc}>
                      <View style={style.containerOtc}>
                        <Image style={style.imageOtc} source={require('../../assets/image/OTC.png')} />
                        <View style={style.contentOtc}>
                          <Text style={style.titleOtc}>OTC</Text>
                          <Text style={style.descOtc}>Check Otc Account</Text>
                        </View>
                        <View style={style.rightOtc}>
                          <Icon name="angle-right" color='black' size={18} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={style.Line}></View>
                    <TouchableOpacity onPress={this.Crypto}>
                      <View style={style.containerCrypto}>
                        <Image style={style.imageCrypto} source={require('../../assets/image/crypto.png')} />
                        <View style={style.contentCrypto}>
                          <Text style={style.titleCrypto}>Crypto</Text>
                          <Text style={style.descCrypto}>Check Crypto Account</Text>
                        </View>
                        <View style={style.rightCrypto}>
                          <Icon name="angle-right" color='black' size={18} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={style.Line}></View>
                    <TouchableOpacity onPress={this.Gold}>
                      <View style={style.containerGold}>
                        <Image style={style.imageMenu} source={require('../../assets/image/gold-resize.png')} />
                        <View style={style.contentGold}>
                          <Text style={style.titleGold}>Gold</Text>
                          <Text style={style.descGold}>Check Gold Account</Text>
                        </View>
                        <View style={style.rightGold}>
                          <Icon name="angle-right" color='black' size={18} />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <AnimatedSplash
            translucent={true}
            isLoaded={this.state.isLoaded}
            logoImage={require('../../assets/image/ich_logo.png')}
            backgroundColor={'white'}
            logoHeight={500}
            logoWidht={500}
          />
        )}
      </>
    );
  }
}

const style = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white'
  },
  accent1: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 0
  },
  accent2: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: 'center',
    paddingTop: 15,
    position: 'absolute',
    zIndex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  headerDesc: {
    fontSize: 18,
    color: '#fff'
  },
  content: {
    paddingTop: 20,
  },
  border: {
    borderRadius: 14,
    height: 50,
    width: deviceWidth - 50,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  circle: {
    height: 30,
    width: 30,
    marginLeft: 20,
    backgroundColor: '#BBD5E0',
    borderRadius: 50,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#686868'
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  borderMenu: {
    borderRadius: 14,
    height: 80,
    width: deviceWidth - 238,
    backgroundColor: '#B90E0B',
    marginRight: 8
  },
  borderMenuAll: {
    borderRadius: 14,
    height: 295,
    width: deviceWidth - 54,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  borderMenuGfx: {
    borderRadius: 14,
    height: 80,
    width: deviceWidth - 238,
    backgroundColor: '#9BC6CF',
    marginRight: 8,
    borderColor: 'white',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  borderMenuOtc: {
    borderRadius: 14,
    height: 80,
    width: deviceWidth - 238,
    backgroundColor: '#9BC6CF',
    marginRight: 8,
    borderColor: 'white',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  borderMenuCrypto: {
    borderRadius: 14,
    height: 80,
    width: deviceWidth - 238,
    backgroundColor: '#9BC6CF',
    marginRight: 4,
    borderColor: 'white',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  borderMenuGold: {
    borderRadius: 14,
    height: 80,
    width: deviceWidth - 238,
    backgroundColor: '#9BC6CF',
    marginLeft: 4,
    borderColor: 'white',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  contentMenu: {
    alignItems: 'center',
    margin: 14
  },
  textMenu: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  imageMenu: {
    height: 60,
    width: 70
  },
  borderContainer: {
    alignItems: 'flex-end',
  },
  containerGofx: {
    marginLeft: 25,
    marginBottom: 5,
    flexDirection: 'row'
  },
  imageGofx: {
    height: 30,
    width: 68,
    marginTop: 23
  },
  contentGofx: {
    marginLeft: 20,
    marginTop: 14
  },
  titleGofx: {
    fontWeight: 'bold'
  },
  descGofx: {
    color: '#686868'
  },
  rightGofx: {
    marginLeft: 74,
    marginTop: 20
  },

  containerOtc: {
    marginLeft: 25,
    marginBottom: 5,
    flexDirection: 'row'
  },
  imageOtc: {
    height: 60,
    width: 65,
    marginTop: 5
  },
  contentOtc: {
    marginLeft: 23,
    marginTop: 14
  },
  titleOtc: {
    fontWeight: 'bold'
  },
  descOtc: {
    color: '#686868'
  },
  rightOtc: {
    marginLeft: 82,
    marginTop: 22
  },

  containerCrypto: {
    marginLeft: 25,
    marginBottom: 5,
    flexDirection: 'row'
  },
  imageCrypto: {
    height: 60,
    width: 65,
    marginTop: 5
  },
  contentCrypto: {
    marginLeft: 22,
    marginTop: 14
  },
  titleCrypto: {
    fontWeight: 'bold'
  },
  descCrypto: {
    color: '#686868'
  },
  rightCrypto: {
    marginLeft: 62,
    marginTop: 22
  },

  containerGold: {
    marginLeft: 25,
    flexDirection: 'row'
  },
  contentGold: {
    marginLeft: 16,
    marginTop: 10
  },
  titleGold: {
    fontWeight: 'bold'
  },
  descGold: {
    color: '#686868'
  },
  rightGold: {
    marginLeft: 74,
    marginTop: 20
  },
  Line: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 2,
    marginLeft: 24,
    marginRight: 34,
    marginTop: 5
  },
  LineGOFX: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 2,
    marginLeft: 24,
    marginRight: 34,
    marginTop: 8
  },
  button: {
    paddingTop: 15,
    fontSize: 20,
    color: 'white'
  }
})
