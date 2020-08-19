import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

import GenreList from "../../containers/GenreList";

import Filter from '../.././assets/icons/drawable/filter.svg';

const GenreDetailPage =  props => {

    return (
        <View style={styles.Container}>
            <View style={{ width: '27%', marginLeft:'2%'}}>
                <Text style={styles.GenreName}> 뮤지컬 </Text>
                <TouchableOpacity style={{flexDirection:'row', marginHorizontal: '8%'}} onPress={()=>{}}>
                    <Text style={styles.Filer}> 필터 </Text>
                    <Filter style={styles.Filer}/>
                </TouchableOpacity>
            </View>
            <View style={{ width: '73%'}}>
                <GenreList/>
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    Container : {
        marginVertical: 50,
        flexDirection: 'row'
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
