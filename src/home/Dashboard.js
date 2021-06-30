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
import {Detail} from './Detail';

export const Dashboard = props => {
  const [cryptoType, setCryptoType] = useState('');
  const [dataType, setDataType] = useState([]);
  const [signal, setSignal] = useState([]);
  const [orders, setOrders] = useState([]);

  const btcdata = {
    signal: 'SELL',
    chartData: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
    orders: [
      {type: 'buy', price: 12.64, date: '06/12/21'},
      {type: 'buy', price: 24.58, date: '02/09/21'},
      {type: 'sell', price: 28.65, date: '06/26/21'},
    ],
  };
  const ethData = {
    signal: 'BUY',
    chartData: [-50, -10, -80, -65, -4, -8, 10, 40, 60, 80, 72, 76, 78, 83, 88],
    orders: [
      {type: 'buy', price: 12.64, date: '06/24/21'},
      {type: 'buy', price: 24.58, date: '03/09/21'},
      {type: 'sell', price: 28.65, date: '06/26/21'},
    ],
  };
  const dogeData = {
    signal: 'SELL',
    chartData: [25, 30, 35, -4, -4, -20, 30, -12, -2, 40, 80, 95, 78, 64, 88],
    orders: [
      {type: 'buy', price: 10.22, date: '06/02/21'},
      {type: 'buy', price: 14.22, date: '05/09/21'},
      {type: 'sell', price: 20.48, date: '06/26/21'},
    ],
  };
  const selectCrypto = selCrypto => {
    setCryptoType(selCrypto);
    switch (true) {
      case selCrypto === 'ETH':
        setDataType(ethData.chartData);
        setSignal(ethData.signal);
        setOrders(ethData.orders);
        break;
      case selCrypto === 'BTC':
        setDataType(btcdata.chartData);
        setSignal(btcdata.signal);
        setOrders(btcdata.orders);
        break;
      case selCrypto === 'DOGE':
        setDataType(dogeData.chartData);
        setSignal(dogeData.signal);
        setOrders(dogeData.orders);
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
        <Text testID='titleText' style={iOSUIKit.title3EmphasizedWhite}>
          Stonk Master - {cryptoType}
        </Text>
        <Selector selectCrypto={selected => selectCrypto(selected)} />
        {cryptoType === '' ? (
          <Text
            style={{...iOSUIKit.title3EmphasizedWhite, textAlign: 'center'}}>
            Press a Button to get started
          </Text>
        ) : (
          <Chart data={dataType} />
        )}
      </View>

      {cryptoType === '' ? null : (
        <Detail signal={signal} cryptoType={cryptoType} orders={orders} />
      )}
    </View>
  );
};
