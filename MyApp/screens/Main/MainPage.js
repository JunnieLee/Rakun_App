import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, Button, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import SearchPage from './SearchPage';
import TopBanner from "../../components/TopBanner";
import GenreSideBar from "../../components/NavBars/GenreSideBar";
import RecommendationList from "../../containers/RecommendationList";

export default class MainPage extends Component {
    state = {
        isVisible: false, //state of modal default false
    }
    render() {
        return (
            <View style = {styles.container}>
                <TopBanner/>
                <View style ={styles.header}>
                    <Text style ={styles.headerTitle}>당신을 위한</Text>
                    <TouchableOpacity style={styles.Search} onPress = {() => {this.setState({ isVisible: true})}}>
                        <Image
                            source={require('../.././assets/icons/search.png')}
                        />
                    </TouchableOpacity>
                </View>

                {/* Genre and Recommendation Contents */}

                <View style={styles.mainContent}>
                    <GenreSideBar style={{ width: '27%'}}/>
                    {/* Side Bar - Genre  : width 27% */}
                    {/* - RecommendationList - Item List Scroll View : width 73 % */}
                    <RecommendationList style={{ width: '73%'}}/>
                </View>

                <Text style = {styles.bigletter}>This is definately the main page</Text>



                <Modal animationType = {"none"} transparent = {false} visible = {this.state.isVisible} statusBarTranslucent={true}>
                    {/*All views of Modal*/}
                    <SafeAreaView style={{ flex: 1 }}>
                    <View style = {styles.modal}>
                        <TouchableOpacity onPress={ ()=>{ this.setState({ isVisible:!this.state.isVisible}) } }>
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
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom:30
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
        fontSize : 20,
        margin: 20,
        marginBottom: 100
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
        flexDirection: 'row'
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
