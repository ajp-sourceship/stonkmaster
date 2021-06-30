/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Dashboard} from './src/home/Dashboard';
console.disableYellowBox = true;
const App  = () => {
  return (
    <View style={{flex:1}}>
     <Dashboard/>
    </View>
  );
};

export default App;
