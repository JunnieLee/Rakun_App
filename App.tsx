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

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, Platform,
  StatusBar, Alert, Dimensions,
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
import EventDetailPage from './MyApp/screens/Details/EventDetailPage';

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

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const App = () => {

  const [scrollY, setY] = useState(0);

  return (

        <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true}/>

          <SafeAreaView style={{ flex: 1 }}>
          {/* Page Rendering*/}

          <View style={{ width:'100%', paddingTop: Platform.OS === 'android' ? 25 : 0}}/>
         <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}
                     onScroll={(e)=>{ setY(e.nativeEvent.contentOffset.y)}}
                     scrollEventThrottle={16}
         >

           {/*<MyRecPage/>*/}
           {/*<MainPage/>*/}
           {/*<My_BasicPage /> */}
           {/* <GenreDetailPage/>*/}



        </ScrollView>

          {/* Fixed Footer Rendering*/}
          <View style={{ position: 'absolute', bottom: 0, width:'100%'}}>
              <MainBottomTab/>
          </View>

          </SafeAreaView>
        </NavigationContainer>

      );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white'// Colors.lighter,
  }
});

export default App;
