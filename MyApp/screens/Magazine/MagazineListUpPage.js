import React, {Component, useState} from 'react';
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
    Platform, StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*
function GenreDetailScreen({ navigation }) {
    return (
        <View>
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
            <GenreDetailPage/>
        </View>
    );
}
*/

const MagazineListUpPage = ({props, navigation}) => {

    const [isVisible, setisVisible] = useState(false);

    const openSearchView = () => setisVisible(isVisible => isVisible = (!isVisible));

    var fixedHeader = (
        <View style ={styles.header}>
            <Text style ={styles.headerTitle}>당신을 위한</Text>
            <TouchableOpacity style={styles.Search} onPress = {openSearchView} >
                <Image
                    source={require('../.././assets/icons/search.png')}
                />
            </TouchableOpacity>
        </View>
    );


    return (
        <ScrollView>
            <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true}/>
            <View style = {styles.container}>
                <View style={{height: 100}}/>
                <Text style = {styles.bigletter}>This is the magazine list up page</Text>
                <View style={{ height:200, backgroundColor:'white' }}>
                    <Text> Still gotta work on the page ..</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom:10,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
});

export default MagazineListUpPage;
