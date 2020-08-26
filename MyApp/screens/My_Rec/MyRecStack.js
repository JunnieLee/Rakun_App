
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EventDetailStack from '~screens/Details/EventDetailStack';
import MyRecPage from '~screens/My_Rec/MyRecPage';

const Stack = createStackNavigator();

const MyRecStack =({props, navigation, route})=> {

    return (
        <Stack.Navigator initialRouteName="MyRecPage" headerMode='none'>
            <Stack.Screen name="MyRecPage" component={MyRecPage} headerMode='none' />
            <Stack.Screen name="EventDetail" component={EventDetailStack} headerMode='none' tabBarVisible={false}/>
        </Stack.Navigator>
    );
}

export default MyRecStack;
