import React, {Component, useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Button,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Platform, StatusBar, Dimensions
} from 'react-native';


import SearchPage from './SearchPage';
import TopBanner from "../../components/TopBanner";
import GenreSideBar from "../../components/NavBars/GenreSideBar";
import RecommendationList from "../../containers/RecommendationList";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GenreDetailPage from '.././Details/GenreDetailPage';


// import firebase from 'react-native-firebase';
import auth from '@react-native-firebase/auth';

const BannerWidth = Dimensions.get('window').width;

function GenreDetailScreen({ navigation }) {
    return (
        <View>
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
            <GenreDetailPage/>
        </View>
    );
}

const MainPageHelper = ({props, navigation}) => {

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

    const [isVisible, setisVisible] = useState(false);

    const openSearchView = () => setisVisible(isVisible => isVisible = (!isVisible));

    const fixedHeader =(
        <View style ={styles.header}>
            <View style={{ flexDirection:'row', alignItems:'center'}}>
                <Text style ={styles.headerTitle}>당신을 위한</Text>
                <TouchableOpacity style={styles.Search} onPress = {openSearchView} >
                    <Image
                        source={require('../.././assets/icons/search.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

        return (
            <>
                <ScrollView stickyHeaderIndices={[2]}>
                    <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true}/>
                    <TopBanner/>
                        {fixedHeader}
                    <View style={styles.container}>
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

                    </View>
                </ScrollView>
            </>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom:10,
        // paddingTop: Platform.OS === 'android' ? 25 : 0
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
        backgroundColor:'white',
        width: '100%',
        height: BannerWidth*(1/6),
        // paddingTop: 25,
        // backgroundColor: 'white',
        // flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: BannerWidth*(1/20)
    },
    headerTitle: {
        width: '80%',
        color: 'black',
        fontSize: 26,
        height: '100%',
        paddingLeft: 15,
        fontFamily: "NotoSansCJKkr",
        fontWeight: "100",
        fontStyle: "normal",
        // lineHeight: 36,
        letterSpacing: 0,
        // alignItems: 'flex-start',
        flexDirection: 'row',
        // backgroundColor:'red'
        // alignItems:'center',
        paddingTop: BannerWidth*(1/20),
        paddingBottom: BannerWidth*(1/20)
    },
    Search: {
        width: '15%',
        height: '90%',
        marginTop:'1%',
        marginRight:'5%',
        alignItems: 'flex-end',
        paddingTop: BannerWidth*(1/20)
        // backgroundColor:'blue'
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
