
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
import {Text, StyleSheet} from 'react-native';

const ResetIcon = props => {
  return <Text style={style.reseticon}>****</Text>;
};

const style = StyleSheet.create({
  reseticon: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#40196d',
    textAlign: 'center',
    color: '#fff',
    height: 80,
    width: 80,
    paddingTop: 25,
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 10,
  },
});

export default ResetIcon;
