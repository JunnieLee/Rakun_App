
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EventDetailStack from '~screens/Details/EventDetailStack';
import MyRecPage from '~screens/My_Rec/MyRecPage';
import MyReviewDetailPage from '~screens/My_Rec/MyReviewDetailPage';

const Stack = createStackNavigator();

const MyRecStack =({props, navigation, route})=> {

    return (
        <Stack.Navigator initialRouteName="MyRecPage" headerMode='none'>
            <Stack.Screen name="MyRecPage" component={MyRecPage} headerMode='none' />
            <Stack.Screen name="EventDetail" component={EventDetailStack} headerMode='none' tabBarVisible={false}/>
            <Stack.Screen name="MyReviewDetail" component={MyReviewDetailPage} headerMode='none' />
        </Stack.Navigator>
    );
}

export default MyRecStack;
