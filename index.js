/**
 * @format
 */

import 'react-native-gesture-handler'; //this line is required
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
