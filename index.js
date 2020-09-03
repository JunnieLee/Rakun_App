/**
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App.tsx';
import {name as appName} from './app.json';

import MainBottomTab from './MyApp/components/NavBars/MainBottomTab.js';
import MainPage from './MyApp/screens/Main/MainPage.js';
import TestPage from './MyApp/screens/Main/TestPage.js';
import InitEntryStack from '~screens/Auth/InitEntryStack';

/*
import {ApolloProvider} from '@apollo/react-hooks';
import {ApolloClient, InMemoryCache} from "@apollo/client";
import auth from "@react-native-firebase/auth";
*/


import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import * as auth from '@react-native-firebase/auth';
import {InMemoryCache} from 'apollo-cache-inmemory';

// import * as firebase from 'firebase';

import {Alert, Text} from "react-native";



const LOCAL_SYSTEM_IP_ADDRESS = '218.48.43.170'; // works on real-device
const PORT = '8000';

// Android 에뮬레이터를 사용하는 경우 localhost를 사용하여 graphql에 접근할 수 없다.
// 에뮬레이터는 자체 IP 주소가있는 VM으로 실행된다.
// 에뮬레이터의 IP 주소를 사용하여 접근해야한다. - 일반적으로 10.0.2.2 사용


// firebase.initializeApp();

const client = new ApolloClient({
    // uri: 'http://localhost:8000/v1/graphql',
    // uri: 'http://${LOCAL_SYSTEM_IP_ADDRESS}:${PORT}/v1/graphql',
    uri: 'http://10.0.2.2:8000/v1/graphql',
    cache: new InMemoryCache({
        addTypename: false,
    }),

    // 원랜 auth()로 되어있었음
    request: async (operation) => {
        if (auth.currentUser) {
            const idTokenResult = await auth.currentUser.getIdTokenResult();
            console.log(idTokenResult);
            operation.setContext({
                headers: {
                    authorization: 'Bearer ' + idTokenResult.token,
                },
            });
            console.warn(idTokenResult);
        }
    },

});

// GraphQL error: Missing Authorization header in JWT authentication mode



const RakunApp = () => (
    <ApolloProvider client={client}>
        <InitEntryStack/>
    </ApolloProvider>
);

// AppRegistry.registerComponent(appName, () => TestPage);
AppRegistry.registerComponent(appName, () => RakunApp);
