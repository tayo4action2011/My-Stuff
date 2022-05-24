// MIT License

// Copyright (c) 2022 John Oseni

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import React from 'react';
import {View, Text, StyleSheet, Image, Keyboard} from 'react-native';
import NavBarAuth from '../components/NavBarAuth';
import KudaInputBar from '../components/InputBar';
import KudaBtn from '../components/Button';

const CODE_LENGTH = new Array(6).fill(0);

class TwoFA extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: null,
      loaded: true,
      userToken: null,
      code: [],
    };
  }

  render() {
    const {code} = this.state;
    const {navigation} = this.props;
    return (
      <View style={style.main}>
        <NavBarAuth
          leftText={'<'}
          rightText={'?'}
          rightTextStyle={style.rightText}
          rightBtnStyle={style.rightBtn}
          leftOnPress={() => navigation.goBack()}
          rightOnPress={() => navigation.navigate.goBack()}
        />
        <View style={style.logoContainer}>
          <Image
            style={style.AuthPinIllustration}
            source={require('../../asset/illustration/enterPin.png')}
          />
          <Text style={style.AuthPinText}>Comfirm</Text>
          <Text style={style.AuthPinTextDescription}>
            We sent you a code by text
          </Text>
        </View>
        <View style={style.inputs}>
          {CODE_LENGTH.map((v, index) => {
            let handleChange = text => {
              code[index] = text;
              this.setState({code: code});
            };

            let handleKeyPress = e => {
              if (e.nativeEvent.key === 'Backspace') {
              }
            };
            return (
              <KudaInputBar
                key={index}
                marginHorizontal={'10%'}
                keyboardType={'numeric'}
                placeholder={'-'}
                onChangeText={handleChange}
                onKeyPress={handleKeyPress}
                maxLength={1}
              />
            );
          })}
          {this.state.code != null ? (
            <View>
              <Text>{this.state.code}</Text>
            </View>
          ) : (
            <View />
          )}
        </View>
        <KudaBtn
          btnName={'Submit'}
          onPress={() => navigation.navigate('Confirmed2FA')}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  rightBtn: {
    width: 30,
    height: 30,
    backgroundColor: '#40196d40',
    borderRadius: 150,
  },
  rightText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#40196d',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  AuthPinText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: '2%',
  },
  AuthPinTextDescription: {
    fontSize: 16,
  },
  AuthPinIllustration: {
    resizeMode: 'contain',
    height: 100,
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    marginTop: '15%',
    marginBottom: '60%',
  },
  signinBtn: {
    alignItems: 'center',
  },
});

export default TwoFA;
