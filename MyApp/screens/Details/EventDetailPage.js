import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated, Alert} from 'react-native';

// import GenreList from "../../containers/GenreList";
// import Filter from '../.././assets/icons/drawable/filter.svg';

const EventDetailPage = ({scrollY}) =>{


        return (
                <View style={styles.Container}>

                    <View style={{ width: '27%', marginLeft:'2%'}}>

                    </View>
                    <View style={{ width: '73%'}}>
                        <View style={{ backgroundColor: (scrollY==0)?'blue':'red', height: 400 }}/>
                        <Text>Hello There~~~~</Text>
                        <Text>{scrollY}</Text>
                        <View style={{ backgroundColor: 'green', height: 400 }}/>

                    </View>

                </View>

        );


}




const styles = StyleSheet.create({
    Container : {
        // marginVertical: 50,
        flexDirection: 'row',
    },

});


export default EventDetailPage;
