import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Alert, Dimensions} from 'react-native';


import ReviewItem from '~components/Items/ReviewItem';


const BannerWidth = Dimensions.get('window').width;



// temporary hard-coded data
const Reviews=[
    {
        id: 'Yej*******',
        rating: 5,
        date: '2019-04-01',
        textContents: '일단 위치가 가장 좋았고 너무 즐겁게 관람했습니다. ' +
            '역시 여배우님의  안전했다. 하지만 숙소의 크기가 내가 생각했던것보다 작아 ' +
            '여자 2, 남자 2이 쓰기에는' + '일단 위치가 가장 좋았고 너무 즐겁게 관람했습니다. ' +
            '역시 여배우님의  안전했다. 하지만 숙소의 크기가 내가 생각했던것보다 작아 ' +
            '여자 2, 남자 2이 쓰기에는',
        // 3줄 넘기면 안됨. str.length 79까지가 max.
        spoiler: false
    },
    {
        id: 'Jun*******',
        rating: 4,
        date: '2019-04-01',
        textContents: '헤헤 일단 저는 지인짜 재밌게 봤어요!!! ' +
            '여배우님 노래 너무 잘하시고 남배우님은 눈부셔서 얼굴도 제대로 못봤네용.. 큐 ',
        spoiler: false
    },
    {
        id: 'Yej*******',
        rating: 5,
        date: '2019-04-01',
        textContents: '일단 위치가 가장 좋았고 너무 즐겁게 관람했습니다. ' +
            '역시 여배우님의  안전했다. 하지만 숙소의 크기가 내가 생각했던것보다 작아 ' +
            '여자 2, 남자 2이 쓰기에는' + '일단 위치가 가장 좋았고 너무 즐겁게 관람했습니다. ' +
            '역시 여배우님의  안전했다. 하지만 숙소의 크기가 내가 생각했던것보다 작아 ' +
            '여자 2, 남자 2이 쓰기에는',
        // 3줄 넘기면 안됨. str.length 79까지가 max.
        spoiler: true
    },
    {
        id: 'Yej*******',
        rating: 3,
        date: '2019-04-01',
        textContents: '일단 위치가 가장 좋았고 너무 즐겁게 관람했습니다. ' +
            '역시 여배우님의  안전했다. 하지만 숙소의 크기가 내가 생각했던것보다 작아 ' +
            '여자 2, 남자 2이 쓰기에는' + '일단 위치가 가장 좋았고 너무 즐겁게 관람했습니다. ' +
            '역시 여배우님의  안전했다. 하지만 숙소의 크기가 내가 생각했던것보다 작아 ' +
            '여자 2, 남자 2이 쓰기에는',
        // 3줄 넘기면 안됨. str.length 79까지가 max.
        spoiler: false
    },
    {
        id: 'Jun*******',
        rating: 2,
        date: '2019-04-01',
        textContents: '헤헤 일단 저는 지인짜 재밌게 봤어요!!! ' +
            '여배우님 노래 너무 잘하시고 남배우님은 눈부셔서 얼굴도 제대로 못봤네용.. 큐 ',
        spoiler: false
    },
]

const SubReviewList = ({props, route}) => {

    // props.eventKey도 있음!
    // 나중에 작품 key 받아와야함

    var Items = [];
    for(let i = 0; i < Reviews.length; i++){
        Items.push(
            <View key = {i}>
                <ReviewItem
                    id = {Reviews[i].id}
                    text = {Reviews[i].textContents}
                    date = {Reviews[i].date}
                    rating = {Reviews[i].rating}
                    spoiler = {Reviews[i].spoiler}
                />
                <View style={{ width :'100%', height:1, backgroundColor:"#a98c66", marginVertical: BannerWidth*(0.005)}}/>
            </View>
        )
    }

    return(
       <View>
           {Items}
       </View>
    );
}

const styles = StyleSheet.create({

});

export default SubReviewList;
