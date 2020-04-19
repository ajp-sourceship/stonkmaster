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
import {LineChart} from 'react-native-chart-kit';



export const Dashboard = props  => {
  const [portfilio, setPortfolio] = useState([]);
  const chrtData = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  }

  return (
    <View style={{flex: 1, backgroundColor: globals.Colors.Black}}>
      <View
        style={{
          backgroundColor: globals.Colors.Black_Mid,
          margin: 12,
          borderRadius: 6,
          padding: 8,
        }}>
        <Text style={iOSUIKit.title3EmphasizedWhite}>Stonk Master</Text>
        <View
          style={{
            margin: 12,
            borderRadius: 6,
            padding: 12,
          }}>
          {portfilio.length > 0 ? null : (
            <LineChart
              data={chrtData}
              width={Dimensions.get("window").width * .8} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${.4})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                  
                },
                propsForDots: {
                  strokeWidth: '1',
                },
              }}
              bezier
              style={{
                margin: 0,
                borderRadius: 16,
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}
