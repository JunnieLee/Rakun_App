/*This is an Example of React Native Add Items to ScrollView using Loop*/
import React, { Component } from 'react';
//import react in our project

import {View, ScrollView, StyleSheet, Text, TouchableOpacity,} from 'react-native';
//import all the components we needed

import RecommendationItem from '.././components/Items/RecommendationItem';


// props --> image, title, date, rating


// temporary hardcoded data

var RecommendationItemImage = [
    'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png',
    'https://user-images.githubusercontent.com/33515577/90023228-73b83280-dcee-11ea-82b1-d325ca688cf3.png',
    'https://user-images.githubusercontent.com/33515577/90023316-90546a80-dcee-11ea-9ba3-491df9cc5f45.png'
];
var RecommendationItemTitle = [
    '오페라의 유령',
    '귀환 (그날의 약속)',
    'Horizon of Axis (수평의 축)'
];
var RecommendationItemDate = [
    '2020.03.14~2020.08.08',
    '2020.03.14~2020.08.08',
    '2020.03.14~2020.08.08'
];
var RecommendationItemRating= [
    4,
    2,
    5
];

var MenuItems_name = ['뮤지컬', '연극', '전시', '박물관', '무용', '오페라', '오케스트라'];

const RecommendationList = (props) => {

    var RecommendationItems = [];

    for(let i = 0; i < RecommendationItemImage.length; i++){
        RecommendationItems.push(
            <View key = {i}>
                <RecommendationItem
                    image = {RecommendationItemImage[i]}
                    title = {RecommendationItemTitle[i]}
                    date = {RecommendationItemDate[i]}
                    rating = {RecommendationItemRating[i]}
                />
            </View>
        )
    }

        return (
            <View style={styles.container}>
                <ScrollView>

                    { RecommendationItems }
                    <TouchableOpacity style={{ marginVertical:20}} onPress={()=>{ }}>
                        <View style = {styles.separatorRectangle}>
                            <Text style = {styles.separatorNameText}>
                                {MenuItems_name[0]} 전체보기
                            </Text>
                        </View>
                        <View style={{ height: 5, backgroundColor: 'white'}}/>
                        <View style={{ height: 7, backgroundColor: '#4d5c6f'}}/>
                    </TouchableOpacity>

                    { RecommendationItems }
                    <TouchableOpacity style={{ marginVertical:20}} onPress={()=>{ }}>
                        <View style = {styles.separatorRectangle}>
                            <Text style = {styles.separatorNameText}>
                                {MenuItems_name[1]} 전체보기
                            </Text>
                        </View>
                        <View style={{ height: 5, backgroundColor: 'white'}}/>
                        <View style={{ height: 7, backgroundColor: '#4d5c6f'}}/>
                    </TouchableOpacity>

                    { RecommendationItems }
                    <TouchableOpacity style={{ marginVertical:20}} onPress={()=>{ }}>
                        <View style = {styles.separatorRectangle}>
                            <Text style = {styles.separatorNameText}>
                                {MenuItems_name[2]} 전체보기
                            </Text>
                        </View>
                        <View style={{ height: 5, backgroundColor: 'white'}}/>
                        <View style={{ height: 7, backgroundColor: '#4d5c6f'}}/>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    separator: {
        height: 1,
        backgroundColor: '#707080',
        width: '100%',
    },

    text: {
        fontSize: 16,
        color: '#606070',
        padding: 10,
    },
    separatorRectangle : {
        width: '100%',
        height: 40,
        backgroundColor: '#4d5c6f',
    },
    separatorNameText : {
        width: 260,
        height: 40,
        fontFamily: "AppleSDGothicNeo",
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 8,
        // alignItems: 'flex-start'
    }
});


export default RecommendationList;
