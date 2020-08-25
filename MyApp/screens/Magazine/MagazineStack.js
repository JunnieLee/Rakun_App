import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

import MagazineList from '~screens/Magazine/MagazineList';
import MagazineDetailPage from '~screens/Magazine/MagazineDetailPage';

const Stack = createStackNavigator();

function MagazineStack() {
    return (
        <Stack.Navigator initialRouteName="MagazineList" headerMode='none'>
            <Stack.Screen name="MagazineList" component={MagazineList} />
            <Stack.Screen name="MagazineDetail" component={MagazineDetailPage} />
        </Stack.Navigator>
    );
}

export default MagazineStack;








