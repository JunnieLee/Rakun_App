import 'react-native-gesture-handler';

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStack from '~screens/Main/MainStack';
import My_BasicPage from '~screens/MY/My_BasicPage'; // 절대경로 사용
import My_RecPage from '~screens/My_Rec/MyRecPage';
import MagazineListUpPage from '~screens/Magazine/MagazineListUpPage';

import UnFocusedHome from '~assets/icons/drawable/icon_home.svg';
import UnFocusedMagazine from '~assets/icons/drawable/icon_magazine.svg';
import UnFocusedMyRec from '~assets/icons/drawable/icon_myrec.svg';
import UnFocusedRakun from '~assets/icons/drawable/icon_myrakun.svg';

import FocusedHome from '~assets/icons/drawable/icon_home_focused.svg';
import FocusedMagazine from '~assets/icons/drawable/icon_magazine_focused.svg';
import FocusedMyRec from '~assets/icons/drawable/icon_myrec_focused.svg';
import FocusedRakun from '~assets/icons/drawable/icon_myrakun_focused.svg';



const Tab = createBottomTabNavigator();

function MyTabs() {
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
                        component={MagazineListUpPage}
                        options={{
                            tabBarLabel: '매거진',
                            tabBarIcon: ({ color, size, focused }) => (
                                focused? <FocusedMagazine/> : <UnFocusedMagazine/>
                            ),
                        }}
            />
            <Tab.Screen name="MyRec"
                        component={My_RecPage}
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
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
