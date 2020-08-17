import React, { Component } from 'react';

import {View, ScrollView, StyleSheet, Text, TouchableOpacity,} from 'react-native';

import JjimItem from '.././components/Items/JjimItem';


// props --> image, title, date, rating

// temporary hardcoded data

var ItemImage = [
    'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png',
    'https://user-images.githubusercontent.com/33515577/90023228-73b83280-dcee-11ea-82b1-d325ca688cf3.png',
    'https://user-images.githubusercontent.com/33515577/90023316-90546a80-dcee-11ea-9ba3-491df9cc5f45.png'
];
var ItemTitle = [
    '오페라의 유령',
    '귀환 (그날의 약속)',
    'Horizon of Axis (수평의 축)'
];
var ItemDate = [
    '2020.03.14~2020.08.08',
    '2020.03.14~2020.08.08',
    '2020.03.14~2020.08.08'
];
var ItemRating= [
    4,
    2,
    5
];


const JjimList = (props) => {

    var Items = [];

    for(let i = 0; i < ItemImage.length; i++){
        Items.push(
            <View key = {i}>
                <JjimItem
                    image = {ItemImage[i]}
                    title = {ItemTitle[i]}
                    date = {ItemDate[i]}
                    rating = {ItemRating[i]}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                { Items }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


export default JjimList;
