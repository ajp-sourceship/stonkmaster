import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import globals from '../globals/Globals';
import {iOSUIKit} from 'react-native-typography';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {Chart} from './Chart';

export const Selector = props => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 6,
      }}>
      <TouchableOpacity testID="btcButton" onPress={() => props.selectCrypto('BTC')}>
        <Text
          style={{
            color: 'white',
            borderColor: 'green',
            borderWidth: 2,
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 8,
          }}>
          BTC
        </Text>
      </TouchableOpacity>
      <TouchableOpacity testID="etgButton" onPress={() => props.selectCrypto('ETH')}>
        <Text
          style={{
            color: 'white',
            borderColor: 'green',
            borderWidth: 2,
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 8,
          }}>
          ETH
        </Text>
      </TouchableOpacity>
      <TouchableOpacity testID="dogButton" onPress={() => props.selectCrypto('DOGE')}>
        <Text
          style={{
            color: 'white',
            borderColor: 'green',
            borderWidth: 2,
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 8,
          }}>
          DOGE
        </Text>
      </TouchableOpacity>
    </View>
  );
};
