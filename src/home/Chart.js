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

export const Chart = props => {
  return (
    <View
      style={{
        margin: 12,
        borderRadius: 6,
        padding: 0,
      }}>
      <AreaChart
        style={{height: 400}}
        data={props.data}
        contentInset={{top: 30, bottom: 30}}
        curve={shape.curveNatural}
        svg={{fill: 'rgba(134, 65, 244, 0.8)'}}>
        <Grid />
      </AreaChart>
    </View>
  );
};
