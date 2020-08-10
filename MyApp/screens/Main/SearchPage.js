import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Input } from 'react-native-elements';
import {Colors} from "react-native/Libraries/NewAppScreen";


const SearchPage =  props => {
    return (
        <View style={styles.screen}>
            <Input
                placeholder='검색'
                rightIcon={
                    <Image source={require('../.././assets/icons/search.png')} size={24}/>
                }
                color='#a98c66'
            />

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>최근검색어</Text>
                <Text style={styles.sectionDescription}>
                    최근검색어
                </Text>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>인기검색어</Text>
                <Text style={styles.sectionDescription}>
                    인기검색어 1
                </Text>
                <Text style={styles.sectionDescription}>
                    인기검색어 2
                </Text>
                <Text style={styles.sectionDescription}>
                    인기검색어 3
                </Text>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'flex-start'
    },
    sectionContainer: {
        marginTop: 20,
    },
    sectionTitle: {
        width: '100%',
        height: 29,
        fontFamily: "AppleSDGothicNeo",
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginTop: 5,
        marginBottom: 5
    },
    sectionDescription: {
        marginHorizontal: 5,
        width: '90%',
        height: 19,
        fontFamily: "AppleSDGothicNeo",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginTop: 5,
        marginBottom: 5
    }
});

export default SearchPage;
