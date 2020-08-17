import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    return ( <MainPage />);
}

function Magazine_page({navigation}) {
    return (
        <View >
            <Button title='메인페이지' onPress={() => navigation.navigate('Main')}/>
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

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <View style={{ paddingVertical: 7, backgroundColor: 'white'}}>

        <Tab.Navigator
            style = {{ paddingVertical: 20 }}
            initialRouteName="Main"
            tabBarOptions={{
                activeTintColor: '#a98c66',
            }}
        >
            <Tab.Screen
                name="Main"
                component={Main}
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
                        focused? <FocusedMagazine/> : <UnFocusedMagazine/>
                    ),

                }}
            />
            <Tab.Screen
                name="MyRecords_page"
                component={MyRecords_page}
                options={{
                    tabBarLabel: '내관람',
                    tabBarIcon: ({ color, size, focused, navigation }) => (
                        focused? <FocusedMyRec/> : <UnFocusedMyRec/>
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

export default function MainBottomTab() {
    return (
            <MyTabs />
    );
}

/*
import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

/*

// four example screen functions just for checking whether everything's alright

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function MagazineScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Magazine!</Text>
        </View>
    );
}

function MyViewScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>My View!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function MainBottomTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#a98c66',
                    inactiveTintColor: '#4d5c6f',
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Magazine" component={MagazineScreen} />
                <Tab.Screen name="MyView" component={MyViewScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
*/


