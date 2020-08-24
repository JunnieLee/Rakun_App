import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Alert, Dimensions} from 'react-native';

import GoBack from '~assets/icons/drawable/goback.svg';

import SubReviewList from '~containers/SubReviewList';
import SubBottomTab from "~components/SubBottomTab";

const BannerWidth = Dimensions.get('window').width;

// props.subNav 로 go Back 가능


const ReviewList = ({props, route}) => {

    const { subNav } = route.params;
    const { title } = route.params;
    // 나중에 작품 key 받아오는것도 이런식으로 해야함

    const review_num = 10;

    return(
        <View style={{backgroundColor:'white', paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
            <View style={{ flexDirection:'row', marginVertical:BannerWidth*(1/37)}}>
                <TouchableOpacity onPress={()=> subNav.goBack()} style={{ marginHorizontal:'5%'}}>
                    <GoBack/>
                </TouchableOpacity>
            </View>
            <View style={{ width:'100%', height:BannerWidth*(1/37)}}/>

            <ScrollView>
                <View style={{ marginLeft: BannerWidth*(0.05) }}>
                    <Text style={styles.miniTitle}>관람 후기 ({review_num})</Text>
                    <View style={{ width :'100%', height:1, backgroundColor:"#a98c66", marginVertical: BannerWidth*(0.005)}}/>
                    {/* LIST OF REVIEWS */}
                    <SubReviewList eventKey={989898}/>
                </View>


                <View style={{ height:100}}/>
                <SubBottomTab navigation={subNav} eventKey={989898} viewForReviewList={true} title={title}/>
                <View style={{ height:80}}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    miniTitle:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/23),
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/10),
        letterSpacing: 0,
        color: "#000000",
        marginVertical: BannerWidth*(1/50),
    },
    idText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/25),
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
    },
    dateText:{
        fontFamily: "Roboto",
        fontSize: BannerWidth*(1/25),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#9c9c9c"
    },
    reviewText:{
        fontFamily: "NotoSansCJKkr",
        fontSize: BannerWidth*(1/27),
        fontWeight: "normal",
        fontStyle: "normal",
        //lineHeight: BannerWidth*(1/18),
        letterSpacing: 0,
        color: "#000000",
        marginVertical:BannerWidth*(1/40),
        width: '98%'
    }
});

export default ReviewList;
