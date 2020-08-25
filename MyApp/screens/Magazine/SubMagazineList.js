import React, {Component, useState} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Platform, StatusBar, Dimensions
} from 'react-native';

import MagazineItem from '~screens/Magazine/MagazineItem';


// temporary hard-coded data
const MagazineContents=[
    {
        img : 'https://user-images.githubusercontent.com/33515577/91139658-60439900-e6ea-11ea-853f-86db02c507c9.png',
        author : '이준희',
        title : '하나의 바이올린을 만들기까지',
        abstract : '60년대서부터 바이올린만을 만들어온 장인이 ' +
            '전달하는 재미있는 바이올린 이야기',
        date : '2020.07.04',
        duration : '3',
        imgContainerStyle : 1,
    },
    {
        img : 'https://user-images.githubusercontent.com/33515577/91139325-45712480-e6ea-11ea-8310-68babcbe9a34.png',
        author : '송예진',
        title : '오케스트라 악기 배치의 비밀',
        abstract : '바이올린은 왜 오른쪽에 있지? 북은 맨 뒤에,' +
            '트럼펫은 가운데… 왜 항상 비슷한 배치일까?',
        date : '2020.08.09',
        duration : '3',
        imgContainerStyle : 3,
    },
    {
        img : 'https://user-images.githubusercontent.com/33515577/91139488-5326aa00-e6ea-11ea-8f47-58120256ee68.png',
        author : '팽동명',
        title : '오케스트라 악기 배치의 비밀',
        abstract : '바이올린은 왜 오른쪽에 있지? 북은 맨 뒤에,' +
            '트럼펫은 가운데… 왜 항상 비슷한 배치일까?',
        date : '2020.09.14',
        duration : '3',
        imgContainerStyle : 2,
    },
    {
        img : 'https://user-images.githubusercontent.com/33515577/91139960-75202c80-e6ea-11ea-91b9-76030627de71.png',
        author : '박석현',
        title : '전시를 대하는 관중들의 자세,' +
            '그리고 관람 매너의 존재 이유',
        abstract : '전시장에서 사진, 저만 불편한가요?',
        date : '2020.03.02',
        duration : '3',
        imgContainerStyle : 3,
    },
    {
        img : 'https://user-images.githubusercontent.com/33515577/91139658-60439900-e6ea-11ea-853f-86db02c507c9.png',
        author : '이준희',
        title : '하나의 바이올린을 만들기까지',
        abstract : '60년대서부터 바이올린만을 만들어온 장인이 ' +
            '전달하는 재미있는 바이올린 이야기',
        date : '2020.07.04',
        duration : '3',
        imgContainerStyle : 2,
    },
    {
        img : 'https://user-images.githubusercontent.com/33515577/91139325-45712480-e6ea-11ea-8310-68babcbe9a34.png',
        author : '송예진',
        title : '오케스트라 악기 배치의 비밀',
        abstract : '바이올린은 왜 오른쪽에 있지? 북은 맨 뒤에,' +
            '트럼펫은 가운데… 왜 항상 비슷한 배치일까?',
        date : '2020.08.09',
        duration : '3',
        imgContainerStyle : 1,
    },
    {
        img : 'https://user-images.githubusercontent.com/33515577/91139488-5326aa00-e6ea-11ea-8f47-58120256ee68.png',
        author : '팽동명',
        title : '오케스트라 악기 배치의 비밀',
        abstract : '바이올린은 왜 오른쪽에 있지? 북은 맨 뒤에,' +
            '트럼펫은 가운데… 왜 항상 비슷한 배치일까?',
        date : '2020.09.14',
        duration : '3',
        imgContainerStyle : 3,
    },

]



const BannerWidth = Dimensions.get('window').width;

const SubMagazineList = (props) => {

    var Items = [];
    for(let i = 0; i < MagazineContents.length; i++){
        Items.push(
            <View key = {i}>
                <MagazineItem
                    img = {MagazineContents[i].img}
                    author = {MagazineContents[i].author}
                    title = {MagazineContents[i].title}
                    abstract = {MagazineContents[i].abstract}
                    date = {MagazineContents[i].date}
                    duration = {MagazineContents[i].duration}
                    imgContainerStyle = {MagazineContents[i].imgContainerStyle}
                    navigation = {props.navigation}
                />
                <View style={{ width :'100%', height:1, backgroundColor:"#a98c66", marginVertical: BannerWidth*(0.06)}}/>
            </View>
        )
    }

    return(
        <View>
            {Items}
        </View>
    );
}

export default SubMagazineList;
