import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

import Main from '~screens/Main/TestPage';
import InitialEntryPage from '~screens/Auth/InitialEntryPage';
import LogIn from '~screens/Auth/LogIn/LogInPage';
import Join from '~screens/Auth/Join/JoinStack';

import SplashScreen from 'react-native-splash-screen';



const Stack = createStackNavigator();

function InitEntryStack() {

    /*
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    */

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }, []);

    return (
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Initial" headerMode='none'>
                <Stack.Screen name="Initial" component={InitialEntryPage} />
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="Join" component={Join} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
            </NavigationContainer>
    );
}

export default InitEntryStack;
