import React, { Component } from 'react';

import {View, ScrollView, StyleSheet, Text, TouchableOpacity,} from 'react-native';

import MyReviewItem from '.././components/Items/MyReviewItem';

// props --> image, summary, date, rating

// temporary hardcoded data

var ReviewImage = [
    'https://user-images.githubusercontent.com/33515577/90378977-0ffa8480-e0b5-11ea-93c5-648061774f97.png',
    'https://user-images.githubusercontent.com/33515577/90379002-1852bf80-e0b5-11ea-9e2d-1be19e0c8748.png',
    'https://user-images.githubusercontent.com/33515577/90379024-2274be00-e0b5-11ea-9eab-59d8fb3c401c.png',
    'https://user-images.githubusercontent.com/33515577/90379045-29033580-e0b5-11ea-864c-08ff073b853d.png',
    'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png',
];
var ReviewSummary = [
    '오래 전부터 한번 보고싶었던 공연이었다. 나 스스로에게 주는 선물이라고 생각하고',
    '이 시간이야말로 오랜만에 나 스스로에게 주는 행복한 값진 선물이었다. 공연을',
    '60년대서부터 바이올린만을 만들어온 장인이 전달하는 재미있는 바이올린 이야기',
    '전시가 신종 코로나바이러스 감염증(코로나19) 사태로 34년 만에 종료된다',
    '첫 샹들리에가 나타나고 올라가는 순간까지 입을 다물지 못했어요.. 정말 입을 다'

];
var ReviewDate = [
    '2020.03.14~2020.08.08',
    '2020.03.14~2020.08.08',
    '2020.03.14~2020.08.08',
    '2020.03.14~2020.08.08',
    '2020.03.14~2020.08.08'
];
var ReviewRating= [
    4,
    2,
    5,
    0,
    3
];


const MyReviewList = (props) => {

    var Items = [];

    for(let i = 0; i < ReviewImage.length; i++){
        Items.push(
            <View key = {i}>
                <MyReviewItem
                    image = {ReviewImage[i]}
                    summary = {ReviewSummary[i]}
                    date = {ReviewDate[i]}
                    rating = {ReviewRating[i]}
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
        flex: 1
    }
});


export default MyReviewList;
