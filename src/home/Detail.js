/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text
} from 'react-native';

import globals from '../globals/Globals';
import {iOSUIKit} from 'react-native-typography';
export const Detail = props => {
  return (
    <View
      style={{
        backgroundColor: globals.Colors.Black_Mid,
        margin: 12,
        borderRadius: 6,
        padding: 8,
      }}>
      <Text style={iOSUIKit.title3EmphasizedWhite}>{props.cryptoType}</Text>
      <Text style={{...iOSUIKit.title3EmphasizedWhite, margin:10}}>SIGNAL - {props.signal}</Text>

      {props.orders.map(order => {
          return <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={iOSUIKit.title3EmphasizedWhite}>{order.type }</Text>
          <Text style={iOSUIKit.title3EmphasizedWhite}>{order.date}</Text>
          <Text style={iOSUIKit.title3EmphasizedWhite}>{order.price}</Text>
          </View>
      })}
    </View>
  );
};
