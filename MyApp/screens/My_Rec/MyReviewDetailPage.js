import React, { Component } from 'react';
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Dimensions,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Sunny from '~assets/icons/drawable/sunny.svg';
import Cloudy from '~assets/icons/drawable/cloudy.svg';
import Rainy from '~assets/icons/drawable/rainy.svg';
import Thunder from '~assets/icons/drawable/thunder.svg';
import Snowy from '~assets/icons/drawable/snowy.svg';
import Windy from '~assets/icons/drawable/windy.svg';

import GoBack from '~assets/icons/drawable/goback.svg';
import BlueStarEmpty from '~assets/icons/drawable/bluestarempty.svg';
import BlueStarFilled from '~assets/icons/drawable/bluestarfilled.svg';

const BannerWidth = Dimensions.get('window').width;
const iconSize = BannerWidth*(1/17);

const MyReviewDetailPage = ({route, navigation}) => {

    const {image} = route.params;
    const {rating} = route.params;
    const {summary} = route.params;
    const {date} = route.params;
    const {nav} = route.params;

    const title = '오페라의 유령'; // hard-coded data --> gotta change it later on
    const viewDateInfo = '2020.08.13 , 18:00 PM , ☀';
    const content = '오래 전부터 한번 보고싶었던 공연이었다. ' +
        '나 스스로에게 주는 선물이라고 생각하고 오래 전부터 한번 보고싶었던 공연이었다. ' +
        '나 스스로에게 주는 선물이라고 생각하고. 오래 전부터 한번 보고싶었던 공연이었다. ' +
        '나 스스로에게 주는 선물이라고 생각하고. ';

    const ratings = [];
    for (var i=0; i < rating ; i++){
        ratings.push( <BlueStarFilled key={i} width={iconSize} height={iconSize} />);
    }
    for (var i=0; i < (5-rating) ; i++){
        ratings.push( <BlueStarEmpty key={i+5} width={iconSize} height={iconSize}/> );
    }

    return(
        <View style={{backgroundColor:'white', paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
            <View style={{ flexDirection:'row', marginVertical:BannerWidth*(1/37), justifyContent: 'space-between',}}>
                <TouchableOpacity onPress={()=> navigation.goBack()} style={{ marginHorizontal:'5%'}}>
                    <GoBack/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ }} style={{ marginHorizontal:'5%'}}>
                    <Text style={styles.miniTitle}>수정</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width:'100%', height:BannerWidth*(1/37)}}/>


            <ScrollView contentContainerStyle={{ marginHorizontal:'5%'}}>
                <Text style={styles.eventTitleText}>{title}</Text>
                <View style={{ backgroundColor: "#f2f2f2"}}>
                    <View style={{margin: BannerWidth*(0.04)}}>
                        {/* 이제 여기 안에 쭉 내용 넣으면 됨~~ */}
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
                            <View>
                                <Text style={styles.detailsText}>{date}</Text>
                                <Text style={styles.TitleText}>제목제목제목</Text>
                                <View style={{flexDirection:'row', marginVertical: 2}}>
                                    {ratings}
                                </View>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: image }}/>
                            </View>
                        </View>
                        <Text style={styles.miniTitle}>관람일 |  {viewDateInfo}</Text>
                        <Text style={styles.ContentText}>{content}</Text>
                    </View>
                </View>

                <View style={{backgroundColor:'#a98c66', height:1, width:'100%', marginVertical:50}}/>
                <Text> 다른글 보기 </Text>
                <View>
                    <View style={{height:100}}/>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({

    eventTitleText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/14),
        fontWeight: "100",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/10),
        letterSpacing: 0,
        color: "#000000",
        marginBottom: BannerWidth*(1/25)
    },

    imageContainer: {
        width: BannerWidth*(0.22),
        height:BannerWidth*(0.22),
        overflow: 'hidden',
        marginBottom: BannerWidth*(1/40)
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden'
        // resizeMode:'contain'
    },
    ContentText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/24),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        opacity: 0.57,
        lineHeight: BannerWidth*(1/16),
        marginTop: BannerWidth*(1/20)
    },
    miniTitle:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/24),
        fontWeight: "normal",
        fontStyle: "normal",
        // lineHeight: BannerWidth*(1/10),
        letterSpacing: 0,
        color: "#000000",
        // marginVertical: BannerWidth*(1/50)
    },
    detailsText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/30),
        fontWeight: "normal",
        fontStyle: "normal",
        // lineHeight: BannerWidth*(1/14),
        letterSpacing: 0,
        color: "#7f7f7f",
        // marginTop: BannerWidth*(0.008),
    },
    TitleText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/21),
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight:  BannerWidth*(1/11),
        letterSpacing: 0,
        color: "#000000"
    },
});

export default MyReviewDetailPage;
