import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated, Alert, Dimensions} from 'react-native';
import Filter from "./GenreDetailPage";

import GoBack from '~assets/icons/drawable/goback.svg';

const BannerWidth = Dimensions.get('window').width;

const EventDetailPage = (props) =>{


        return (
            <View style={{backgroundColor:'white', paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
                <View style={{ flexDirection:'row', marginLeft: '5%', marginVertical:BannerWidth*(1/40)}}>
                    <TouchableOpacity onPress={()=> props.navigation.goBack()}>
                        <GoBack style={styles.Filer}/>
                    </TouchableOpacity>
                </View>
                <ScrollView  contentContainerStyle={styles.Container}>
                    <View style={{ width: '27%', marginLeft:'2%'}}>
                        <Text style={styles.GenreName}> 뮤지컬 </Text>
                    </View>
                    <View style={{ width: '73%'}}>
                        <Text>Hi</Text>
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
});


export default EventDetailPage;
