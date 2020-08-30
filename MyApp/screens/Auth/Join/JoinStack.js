import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

// import Main from '~screens/Main/TestPage';
// import InitialEntryPage from '~screens/Auth/InitialEntryPage';
// import LogIn from '~screens/Auth/LogIn/LogInPage';

import New1 from '~screens/Auth/Join/Join_1_New1';
import New2 from '~screens/Auth/Join/Join_2_New2';
import Q1 from '~screens/Auth/Join/Join_3_Q1';
import Q2 from '~screens/Auth/Join/Join_4_Q2';
import Q3 from '~screens/Auth/Join/Join_5_Q3';
import Q4 from '~screens/Auth/Join/Join_6_Q4';


const Stack = createStackNavigator();

function JoinStack() {
    return (
        <Stack.Navigator initialRouteName="New1" headerMode='none'>
            <Stack.Screen name="New1" component={New1} />
            <Stack.Screen name="New2" component={New2} />
            <Stack.Screen name="Q1" component={Q1} />
            <Stack.Screen name="Q2" component={Q2} />
            <Stack.Screen name="Q3" component={Q3} />
            <Stack.Screen name="Q4" component={Q4} />
        </Stack.Navigator>
    );
}

export default JoinStack;
