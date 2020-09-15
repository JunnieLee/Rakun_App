import 'react-native-gesture-handler';

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStack from '~screens/Main/MainStack';
import My_BasicPage from '~screens/MY/My_BasicPage'; // 절대경로 사용
import MyRecStack from '~screens/My_Rec/MyRecStack';
import MagazineStack from '~screens/Magazine/MagazineStack';

import UnFocusedHome from '~assets/icons/drawable/icon_home.svg';
import UnFocusedMagazine from '~assets/icons/drawable/icon_magazine.svg';
import UnFocusedMyRec from '~assets/icons/drawable/icon_myrec.svg';
import UnFocusedRakun from '~assets/icons/drawable/icon_myrakun.svg';

import FocusedHome from '~assets/icons/drawable/icon_home_focused.svg';
import FocusedMagazine from '~assets/icons/drawable/icon_magazine_focused.svg';
import FocusedMyRec from '~assets/icons/drawable/icon_myrec_focused.svg';
import FocusedRakun from '~assets/icons/drawable/icon_myrakun_focused.svg';


import React, {useState, useEffect} from "react";
// import firebase from "react-native-firebase";
import auth from '@react-native-firebase/auth';

// 여기에 loading splash page 만들기!!

const Tab = createBottomTabNavigator();

function MyTabs() {

    const [currentUser, setcurrentUser] = useState(null);

    /*
    useEffect(() => {
        const { mycurrentUser } = auth();
        setcurrentUser({ mycurrentUser });
    });
    */
    // --> commented out due to the error below
    // Maximum update depth exceeded.
    // This can happen when a component calls setState inside useEffect,
    // but useEffect either doesn't have a dependency array,
    // or one of the dependencies changes on every render.


    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#a98c66',
            }}>
            <Tab.Screen name="Home"
                        component={MainStack}
                        options={{
                            tabBarLabel: '홈',
                            tabBarIcon: ({ color, size, focused }) => (
                                focused? <FocusedHome/> : <UnFocusedHome/>
                            ),
                        }}
            />
            <Tab.Screen name="Magazine"
                        component={MagazineStack}
                        options={{
                            tabBarLabel: '매거진',
                            tabBarIcon: ({ color, size, focused }) => (
                                focused? <FocusedMagazine/> : <UnFocusedMagazine/>
                            ),
                        }}
            />
            <Tab.Screen name="MyRec"
                        component={MyRecStack}
                        options={{
                            tabBarLabel: '내관람',
                            tabBarIcon: ({ color, size, focused, navigation }) => (
                                focused? <FocusedMyRec/> : <UnFocusedMyRec />
                            ),
                        }}
            />
            <Tab.Screen name="MY"
                        component={My_BasicPage}
                        options={{
                            tabBarLabel: 'My',
                            tabBarIcon: ({ color, size, focused, navigation }) => (
                                focused? <FocusedRakun/> : <UnFocusedRakun/>
                            ),
                        }}
            />
        </Tab.Navigator>
    );
}

export default function TestPage() {
    return (

            <MyTabs />

    );
}
