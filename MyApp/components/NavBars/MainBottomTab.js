import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {inspect} from "util";

import Home from '../.././assets/icons/drawable/icon_home.svg';
import Magazine from '../.././assets/icons/drawable/icon_magazine.svg';
import MyRec from '../.././assets/icons/drawable/icon_myrec.svg';
import Rakun from '../.././assets/icons/drawable/icon_myrakun.svg';

function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}

function MyRecords(){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>내 관람!</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <View style={{ paddingVertical: 10, backgroundColor: 'white' }}>

        <Tab.Navigator
            // style = {{ paddingVertical: 20 }}
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#a98c66',
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: '홈',
                    tabBarIcon: ({ color, size }) => (
                         <Home fill={color} size={size} />
                    ),

                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: '매거진',
                    tabBarIcon: ({ color, size }) => (
                      <Magazine fill={ color } size={size} />
                    ),

                }}
            />
            <Tab.Screen
                name="MyRecords"
                component={MyRecords}
                options={{
                    tabBarLabel: '내관람',
                    tabBarIcon: ({ color, size }) => (
                        <MyRec fill={color} size={size} />
                    ),

                }}
            />
            <Tab.Screen
                name="My"
                component={Profile}
                options={{
                    tabBarLabel: 'My',
                    tabBarIcon: ({ color, size }) => (
                        <Rakun fill={color} size={size} />
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


