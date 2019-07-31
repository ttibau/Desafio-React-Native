import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './src/utils/route';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

AppRegistry.registerComponent(appName, () => AppNavigator);
