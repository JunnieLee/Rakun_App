
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

import MainPage from '~screens/Main/MainPage';
import GenreDetailPage from '~screens/Details/GenreDetailPage';
// import EventDetailPage from '~screens/Details/EventDetailPage';
import EventDetailStack from '~screens/Details/EventDetailStack';


const Stack = createStackNavigator();

function MainStack() {
    return (
            <Stack.Navigator initialRouteName="Main" headerMode='none'>
                <Stack.Screen name="Main" component={MainPage} />
                <Stack.Screen name="GenreDetail" component={GenreDetailPage} />
                <Stack.Screen name="EventDetail" component={EventDetailStack}
                              options={{tabBarVisible:false}}/>
            </Stack.Navigator>
    );
}

export default MainStack;
