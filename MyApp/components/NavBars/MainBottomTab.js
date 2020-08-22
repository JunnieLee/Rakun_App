
import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import UnFocusedHome from '../.././assets/icons/drawable/icon_home.svg';
import UnFocusedMagazine from '../.././assets/icons/drawable/icon_magazine.svg';
import UnFocusedMyRec from '../.././assets/icons/drawable/icon_myrec.svg';
import UnFocusedRakun from '../.././assets/icons/drawable/icon_myrakun.svg';

import FocusedHome from '../.././assets/icons/drawable/icon_home_focused.svg';
import FocusedMagazine from '../.././assets/icons/drawable/icon_magazine_focused.svg';
import FocusedMyRec from '../.././assets/icons/drawable/icon_myrec_focused.svg';
import FocusedRakun from '../.././assets/icons/drawable/icon_myrakun_focused.svg';

import MainPage from '../.././screens/Main/MainPage';
import MyRec from '../.././screens/My_Rec/MyRecPage';

function Main({navigation}) {
    return <MainPage navigation={navigation}/>;
}

function Magazine_page(props) {
    return (
        <View >
            <Button title='메인페이지'
                    onPress={() => props.navigation.navigate('Main')}
            />
            <Text>Magazine!</Text>
        </View>
    );
}

function MyRecords_page({navigation}){
    return ( <MyRec/> );
}

function My({navigation}) {
    return (
        <View>
            <Button title='메인페이지' onPress= {() => navigation.navigate('Main')} />
            <Text>My 계정설정 페이지!</Text>
        </View>
    );
}

function HomeScreen() {
    // Alert.alert('Home screen called!');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    // Alert.alert('Settings screen called!');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <View style={{ paddingVertical: 7, backgroundColor: 'white'}}>

        <Tab.Navigator
            style = {{ paddingVertical: 20 }}
            initialRouteName="Main"
            tabBarOptions={{
                activeTintColor: '#a98c66',
            }}>
            <Tab.Screen
                name="Main"
                component={MainPage}
                options={{
                    tabBarLabel: '홈',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused? <FocusedHome/> : <UnFocusedHome/>
                    ),
                }}
            />
            <Tab.Screen
                name="Magazine_page"
                component={Magazine_page}
                options={{
                    tabBarLabel: '매거진',
                    tabBarIcon: ({ color, size, focused, navigation }) => (
                        focused? <FocusedMagazine/> : <UnFocusedMagazine onClick={()=>Magazine_page(navigation)}/>
                    ),

                }}
            />
            <Tab.Screen
                name="MyRecords_page"
                component={MyRecords_page}
                options={{
                    tabBarLabel: '내관람',
                    tabBarIcon: ({ color, size, focused, navigation }) => (
                        focused? <FocusedMyRec/> : <UnFocusedMyRec />
                    ),

                }}
            />
            <Tab.Screen
                name="My"
                component={My}
                options={{
                    tabBarLabel: 'My',
                    tabBarIcon: ({ color, size, focused, navigation }) => (
                        focused? <FocusedRakun/> : <UnFocusedRakun/>
                    ),
                }}
            />
        </Tab.Navigator>


            </View>
    );
}




////////////////////////////////////////////////////////////////////////

/*
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
*/

const Tab1 = createBottomTabNavigator();

function TestTab() {
    return (
            <Tab1.Navigator>
                <Tab1.Screen name="Home" component={HomeScreen}
                             listeners={({ navigation, route }) => ({
                                 tabPress: e => {
                                     if (route.state && route.state.routeNames.length > 0) {
                                         Alert.alert('hello main');
                                     }
                                 },
                             })}
                            />
                <Tab1.Screen name="Settings" component={SettingsScreen}
                             listeners={({ navigation, route }) => ({
                                 tabPress: e => {
                                     if (route.state && route.state.routeNames.length > 0) {
                                         Alert.alert('hello setting');
                                     }
                                 },
                             })}
                             />
            </Tab1.Navigator>
    );
}


////////////////////////////////////////////////////////////////////////




export default function MainBottomTab() {
    return (
            //<TestTab/>
        <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
    );
}




