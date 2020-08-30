import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

import Main from '~screens/Main/TestPage';
import InitialEntryPage from '~screens/Auth/InitialEntryPage';
import LogIn from '~screens/Auth/LogIn/LogInPage';
import Join from '~screens/Join/JoinStack';


const Stack = createStackNavigator();

function InitEntryStack() {
    return (
        <Stack.Navigator initialRouteName="Initial" headerMode='none'>
            <Stack.Screen name="Initial" component={InitialEntryPage} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Join" component={Join} />
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    );
}

export default InitEntryStack;
