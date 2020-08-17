import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Modal, Button, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';

import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';

import SearchPage from './SearchPage';
import TopBanner from "../../components/TopBanner";
import GenreSideBar from "../../components/NavBars/GenreSideBar";
import RecommendationList from "../../containers/RecommendationList";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GenreDetailPage from '.././Details/GenreDetailPage';

function GenreDetailScreen({ navigation }) {
    return (
        <View>
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
            <GenreDetailPage/>
        </View>
    );
}

const MainPageHelper = ({props, navigation}) => {

    const [isVisible, setisVisible] = useState(false);

    const openSearchView = () => setisVisible(isVisible => isVisible = (!isVisible));

    var fixedHeader = (
        <View style ={styles.header}>
            <Text style ={styles.headerTitle}>당신을 위한</Text>
            <TouchableOpacity style={styles.Search} onPress = {() => {this.setState({ isVisible: true})}}>
                <Image
                    source={require('../.././assets/icons/search.png')}
                />
            </TouchableOpacity>
        </View>
    );


        return (
            <View style = {styles.container}>
                <TopBanner/>
                {fixedHeader}
                <View style={styles.mainContent}>
                    <GenreSideBar style={{ width: '27%'}}/>
                    {/* Side Bar - Genre  : width 27% */}
                    {/* - RecommendationList - Item List Scroll View : width 73 % */}
                    <RecommendationList style={{ width: '73%'}} navigation={navigation}/>
                </View>
                <Modal animationType = {"slide"} transparent = {false} visible = {isVisible} statusBarTranslucent={true}>
                    {/*All views of Modal*/}
                    <SafeAreaView style={{ flex: 1 }}>
                    <View style = {styles.modal}>
                        <TouchableOpacity onPress={ openSearchView }>
                            <Image
                                source={require('../.././assets/icons/close.png')}
                                style={styles.closeTab}
                            />
                        </TouchableOpacity>
                        {/* Show Search Page */}
                        <SearchPage />
                    </View>
                    </SafeAreaView>
                </Modal>
                {/*Button will change state to true and view will re-render*/}

                <Text style = {styles.bigletter}>This is end of the main page</Text>
                <View style={{ height:200, backgroundColor:'white' }}>
                    <Text> Still gotta work on the page ..</Text>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom:10
    },
    modal: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    },
    bigletter: {
        paddingTop: 30,
        fontSize : 20,
        margin: 20,
        marginBottom: 10,
    },
    closeTab : {
        width: 40,
        height: 44,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop:30,
        paddingLeft:30
    },
    header: {
        width: '100%',
        height: 90,
        paddingTop: 25,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    headerTitle: {
        width: '90%',
        color: 'black',
        fontSize: 26,
        height: 36,
        paddingLeft: 15,
        fontFamily: "NotoSansCJKkr",
        fontWeight: "100",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        alignItems: 'flex-start'
    },
    Search: {
        width: 22,
        height: 18,
        alignItems: 'flex-end'
    },
    mainContent: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
});


const Stack = createStackNavigator();

function MainPage() {
    return (

        <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={MainPageHelper} />
                <Stack.Screen name="Details" component={GenreDetailScreen} />
            </Stack.Navigator>

    );
}


export default MainPageHelper;

//////////////////////////////////
/*
const MainPage =  props => {
    return (
        <View style={styles.screen}>
            <Text>This is MainPage!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default MainPage;
*/
