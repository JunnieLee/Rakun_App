/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import {ApolloProvider} from '@apollo/react-hooks';
/*
import ApolloClient from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
*/

import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'

import auth from '@react-native-firebase/auth';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MainHeader from './MyApp/components/MainHeader';
import TopBanner from './MyApp/components/TopBanner';
import MainPage from './MyApp/screens/Main/MainPage';
import MainBottomTab from './MyApp/components/NavBars/MainBottomTab';
import MyRecPage from "./MyApp/screens/My_Rec/MyRecPage";
import GenreDetailPage from "./MyApp/screens/Details/GenreDetailPage";
import My_BasicPage from './MyApp/screens/MY/My_BasicPage';


declare const global: {HermesInternal: null | {}};


//
const client = new ApolloClient({
  uri: 'http://localhost:8000/v1/graphql',
  cache: new InMemoryCache({
    addTypename: false,
  }),
  /*
  request: async (operation) => {
    if (auth().currentUser) {
      const idTokenResult = await auth().currentUser.getIdTokenResult();
      operation.setContext({
        headers: {
          authorization: 'Bearer ' + idTokenResult.token,
        },
      });
    }
  },
   */
});
//


const App = () => {
  return (
      <ApolloProvider client={client}>
        <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true}/>
      <SafeAreaView style={{ flex: 1 }}>
          {/* Page Rendering*/}

         <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
           {/*<MyRecPage/>*/}
           {/*<MainPage/>*/}
            <My_BasicPage />
           {/* <GenreDetailPage/>*/}

        </ScrollView>

          {/* Fixed Footer Rendering*/}
          <View style={{ position: 'absolute', bottom: 0, width:'100%'}}>
              <MainBottomTab/>
                <View style={{ height : 80, backgroundColor: 'pink'}}>
                    <Text style={{ marginTop : 50}}> Area saved for checking the bottom tab ! </Text>
                </View>
          </View>

      </SafeAreaView>
        </NavigationContainer>
      </ApolloProvider>
      );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white'// Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
