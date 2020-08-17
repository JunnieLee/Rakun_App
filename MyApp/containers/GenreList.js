
import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

import GenreItem from ".././components/Items/GenreItem";


// props --> image, title, date, rating, likes

// temporary hardcoded data

var ItemImage = [
    'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png',
    'https://user-images.githubusercontent.com/33515577/90023228-73b83280-dcee-11ea-82b1-d325ca688cf3.png',
    'https://user-images.githubusercontent.com/33515577/90023316-90546a80-dcee-11ea-9ba3-491df9cc5f45.png',

    'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png',
    'https://user-images.githubusercontent.com/33515577/90023228-73b83280-dcee-11ea-82b1-d325ca688cf3.png',
    'https://user-images.githubusercontent.com/33515577/90023316-90546a80-dcee-11ea-9ba3-491df9cc5f45.png'

];

var ItemTitle = [
    '오페라의 유령',
    '귀환 (그날의 약속)',
    'Horizon of Axis',

    '오페라의 유령',
    '귀환 (그날의 약속)',
    'Horizon of Axis'
];

var ItemDate = [
    '~2020.08.08',
    '~2020.08.08',
    '~2020.08.08',

    '~2020.08.08',
    '~2020.08.08',
    '~2020.08.08'
];

var ItemRating= [
    4.5,
    2,
    3.5,

    4,
    2.5,
    5
];

var ItemLikes= [
    4,
    9,
    2,

    100,
    23,
    0
];


const GenreList = (props) => {

    var Items = [];

    for(let i = 0; i < ItemImage.length; i+=2){
        Items.push(
            <View key = {i} style={{ flexDirection: 'row'}}>
                <GenreItem
                    image = {ItemImage[i]}
                    title = {ItemTitle[i]}
                    date = {ItemDate[i]}
                    rating = {ItemRating[i]}
                    likes = {ItemLikes[i]}
                />
                <GenreItem
                    image = {ItemImage[i+1]}
                    title = {ItemTitle[i+1]}
                    date = {ItemDate[i+1]}
                    rating = {ItemRating[i+1]}
                    likes = {ItemLikes[i+1]}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                { Items }
                { Items }

                <View style={{ marginVertical: 50, backgroundColor: 'white'}} />
                <Text> ... Updating the page ...</Text>
                <View style={{ marginVertical: 100, backgroundColor: 'white'}} />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingVertical: '4%'
    }
});


export default GenreList;
