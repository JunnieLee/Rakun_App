import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

import GenreList from "../../containers/GenreList";

import Filter from '../.././assets/icons/drawable/filter.svg';
import GoBack from '~assets/icons/drawable/goback.svg';
import Share from '~assets/icons/drawable/share.svg';

const BannerWidth = Dimensions.get('window').width;

const GenreDetailPage =  ({props, navigation, genreName}) => {
    return (
        <View style={{backgroundColor:'white', paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
            <View style={{ flexDirection:'row', marginLeft: '5%', marginVertical:BannerWidth*(1/40)}}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <GoBack style={styles.Filer}/>
                </TouchableOpacity>
            </View>
        <ScrollView  stickyHeaderIndices={[0]} contentContainerStyle={styles.Container}>
            <View style={{ width: '27%', marginLeft:'2%'}}>
                <Text style={styles.GenreName}>{JSON.stringify(genreName)} 뮤지컬</Text>
                <Share/>
                <TouchableOpacity style={{flexDirection:'row', marginHorizontal: '8%'}} onPress={()=>{}}>
                    <Text style={styles.Filer}> 필터 </Text>
                    <Filter style={styles.Filer}/>
                </TouchableOpacity>
            </View>
            <View style={{ width: '73%'}}>
                <GenreList navigation={navigation}/>
            </View>
        </ScrollView>
        </View>
    );
}




const styles = StyleSheet.create({
    Container : {
        marginVertical: 20,
        flexDirection: 'row',
        backgroundColor:'white'
    },
    GenreName: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    Filer:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f7f7f",
        marginVertical: '12%',
        // marginHorizontal: '8%'
    }
});


export default GenreDetailPage;
