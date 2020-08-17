import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

import GenreList from "../../containers/GenreList";


const GenreDetailPage =  props => {

    return (
        <View style={styles.Container}>
            <View style={{ width: '27%'}}>
                <Text style={styles.GenreName}> 뮤지컬 </Text>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={styles.Filer}> 필터 </Text>
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
        marginVertical: '8%',
        marginHorizontal: '8%'
    }
});


export default GenreDetailPage;
