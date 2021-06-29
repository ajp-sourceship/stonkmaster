/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
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
import {Selector} from './Selector';

export const Dashboard = props => {
  const [cryptoType, setCryptoType] = useState([]);
  const [dataType, setDataType] = useState([]);

  const btcdata = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
  const ethData = [ -50, -10, -80, -65, -4, -8, 10, 40, 60, 80, 72, 76, 78, 83, 88 ];
  const dogeData = [ 25, 30, 35, -4, -4, -20, 30, -12, -2, 40,80, 95, 78, 64, 88 ];

  const selectCrypto = selCrypto => {
    setCryptoType(selCrypto);
    switch(true)
    {
      case selCrypto === 'ETH':
        setDataType(ethData)
        break;
      case selCrypto === 'BTC':
        setDataType(btcdata)
        break;
      case selCrypto === 'DOGE':
        setDataType(dogeData)
        break;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: globals.Colors.Black}}>
      <View
        style={{
          backgroundColor: globals.Colors.Black_Mid,
          margin: 12,
          borderRadius: 6,
          padding: 8,
        }}>
        <Text style={iOSUIKit.title3EmphasizedWhite}>
          Stonk Master - {cryptoType}
        </Text>
        <Selector 
          selectCrypto={selected => selectCrypto(selected)} 
          />
        <Chart 
          data={dataType} 
          />
      </View>
    </View>
  );
};
