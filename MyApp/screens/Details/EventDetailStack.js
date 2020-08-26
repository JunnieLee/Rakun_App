
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EventDetailPage from '~screens/Details/EventDetailPage';
import ReviewList from '~screens/Review/ReviewList';
import WriteReviewPage from '~screens/Review/WriteReviewPage';
import EventDetailSeeMore from '~screens/Details/EventDetailSeeMore';
import SubBottomTab from "~components/SubBottomTab";


/*
let nav = null;

const InsertOtherNav =({otherNav})=> {
    nav = otherNav;
}

const fooEventDetail =({props})=> {
    const navigation = useNavigation();
    return <EventDetailPage MainNav={nav} ReviewNav={navigation}
                            image = {IMG} rating = {RT}
                            title = {TTL} date = {DT}/>
}
*/


const Stack = createStackNavigator();

const EventDetailStack =({props, navigation, route})=> {

    return (
        <Stack.Navigator initialRouteName="EventDetailPage" headerMode='none'>
            <Stack.Screen name="EventDetailPage" component={EventDetailPage} headerMode='none' tabBarVisible={false}/>
            <Stack.Screen name="EventDetailSeeMore" component={EventDetailSeeMore} headerMode='none' />
            <Stack.Screen name="WriteReview" component={WriteReviewPage} headerMode='none'/>
            <Stack.Screen name="ReviewList" component={ReviewList} headerMode='none'/>
        </Stack.Navigator>
    );
}

export default EventDetailStack;
