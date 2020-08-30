/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.tsx';
import {name as appName} from './app.json';

import MainBottomTab from './MyApp/components/NavBars/MainBottomTab.js';
import MainPage from './MyApp/screens/Main/MainPage.js';
import TestPage from './MyApp/screens/Main/TestPage.js';
import InitEntryStack from '~screens/Auth/InitEntryStack.js';

// AppRegistry.registerComponent(appName, () => TestPage);
AppRegistry.registerComponent(appName, () => InitEntryStack);
