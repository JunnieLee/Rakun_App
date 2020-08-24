
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EventDetailPage from '~screens/Details/EventDetailPage';
import ReviewList from '~screens/Review/ReviewList';
import WriteReviewPage from '~screens/Review/WriteReviewPage';

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

const Stack = createStackNavigator();

const EventDetailStack =({props, navigation, route})=> {

    const navi = useNavigation();
    InsertOtherNav(navi);

    return (
        <Stack.Navigator initialRouteName="EventDetailPage" headerMode='none'>
            <Stack.Screen name="EventDetailPage" component={EventDetailPage}/>
            <Stack.Screen name="WriteReview" component={WriteReviewPage} />
            <Stack.Screen name="ReviewList" component={ReviewList} />
        </Stack.Navigator>
    );
}

export default EventDetailStack;
