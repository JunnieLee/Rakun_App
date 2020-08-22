
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EventDetailPage from '~screens/Details/EventDetailPage';
import ReviewList from '~screens/Review/ReviewList';
import WriteReviewPage from '~screens/Review/WriteReviewPage';


let nav = null;

const InsertOtherNav =(otherNav)=> {
    nav = otherNav;
}

const fooEventDetail =()=> {
    const navigation = useNavigation();
    return <EventDetailPage MainNav={nav} ReviewNav={navigation}/>
}

const Stack = createStackNavigator();

const EventDetailStack =(props)=> {

    const navi = useNavigation();
    InsertOtherNav(navi);
    return (
        <Stack.Navigator initialRouteName="EventDetail" headerMode='none'>
            <Stack.Screen name="EventDetail" component={fooEventDetail} />
            <Stack.Screen name="WriteReview" component={WriteReviewPage} />
            <Stack.Screen name="ReviewList" component={ReviewList} />
        </Stack.Navigator>
    );
}

export default EventDetailStack;
