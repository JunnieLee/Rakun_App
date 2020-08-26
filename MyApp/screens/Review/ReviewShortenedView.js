import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,Dimensions} from 'react-native';

import BlackStarFilled from '~assets/icons/drawable/blackstarfilled.svg';
import BlackStarEmpty from '~assets/icons/drawable/blackstarempty.svg';



const BannerWidth = Dimensions.get('window').width;
const iconSize = BannerWidth*(1/25);

// temporary hard-coded data --> gotta work on this one later one!
const review_num = 10;

const review_samples = [
    {
        id: 'Yej*******',
        rating: 5,
        date: '2019-04-01',
        textContents: '일단 위치가 가장 좋았고 너무 즐겁게 관람했습니다. ' +
            '역시 여배우님의  안전했다. 하지만 숙소의 크기가 내가 생각했던것보다 작아 ' +
            '여자 2, 남자 2이 쓰기에는' + '일단 위치가 가장 좋았고 너무 즐겁게 관람했습니다. ' +
            '역시 여배우님의  안전했다. 하지만 숙소의 크기가 내가 생각했던것보다 작아 ' +
            '여자 2, 남자 2이 쓰기에는'

        // 3줄 넘기면 안됨. str.length 79까지가 max.
    },
    {
        id: 'Jun*******',
        rating: 4,
        date: '2019-04-01',
        textContents: '헤헤 일단 저는 지인짜 재밌게 봤어요!!! ' +
            '여배우님 노래 너무 잘하시고 남배우님은 눈부셔서 얼굴도 제대로 못봤네용.. 큐 '
    }
];



const ReviewShortenedView = props => {

    // 1. ratings 작업 (숫자를 받아와 icon list로 만들기)

    var ratings1 = [ ];
    for (var i=0; i < review_samples[0].rating ; i++){
        ratings1.push(<Image source={require('~assets/icons/finalBlackStarGrayBackground.png')}
                             style={{ width:iconSize, height:iconSize, marginVertical: iconSize*(1/2)}}
                             key={i} />);
    }
    for (var i=0; i < (5-review_samples[0].rating) ; i++){
        ratings1.push(<Image source={require('~assets/icons/finalBlackStarGrayBackgroundEmpty.png')}
                             style={{ width:iconSize*(0.95), height:iconSize*(0.95), marginVertical: iconSize*(1/2)}}
                             key={i+5}/>);}


    var ratings2 = [ ];
    for (var i=0; i < review_samples[1].rating ; i++){
        ratings2.push(<Image source={require('~assets/icons/finalBlackStarGrayBackground.png')}
                             style={{ width:iconSize, height:iconSize, marginVertical: iconSize*(1/2)}} key={i+10} />);
    }
    for (var i=0; i < (5-review_samples[1].rating) ; i++){
        ratings2.push(<Image source={require('~assets/icons/finalBlackStarGrayBackgroundEmpty.png')}
                             style={{ width:iconSize*(0.95), height:iconSize*(0.95), marginVertical: iconSize*(1/2)}}
                             key={i+15}/>);
    }

    // 2. 3줄을 넘어가면 <더보기> 란 만들어주기!
    var str_long = [];
    for (var i=0; i< review_samples.length;i++){ (review_samples[i].textContents.length > 74)? str_long.push(true): str_long.push(false) ;}

    // 나중에 리뷰들 쭉 있는 리스트 만들때, 이런식으로 현재꺼가 길어서 접혀 있는 상태인지 아닌지 직접 하나의 item 내 state로 만들어주기!
    // (cf. 짧아서 접고 펴고 할 필요가 없는 애들은 계속해서 shortened가 false인 상태이겠지.
    // 얘네를 true로 만들 수 있는 방법도 없고 (더보기 버튼이 안나올테니)

    // long or not 과 관련된걸 하나 받고,
    const [Shortened_1, ChangeShortened_1] = useState(str_long[0]);
    const [shortened_2, ChangeShortened_2] = useState(str_long[1]);


    return(
        <View style={{ backgroundColor: "#f2f2f2", marginLeft: BannerWidth*(0.15), marginVertical: BannerWidth*(0.05)}}>
            <View style={{ marginLeft: BannerWidth*(0.05) }}>
                <Text style={styles.miniTitle}>관람 후기 ({review_num})</Text>
                <View style={{ width :'100%', height:1, backgroundColor:"#a98c66", marginVertical: BannerWidth*(0.005)}}/>


                <View style={{ marginRight: BannerWidth*(0.05)}} >
                    <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:BannerWidth*(1/50)}}>
                        <Text style={styles.idText}> {review_samples[0].id} </Text>
                        <View style={{ flexDirection:'row' }}>
                        {ratings1}
                        </View>
                    </View>
                    <Text style={styles.dateText}>{review_samples[0].date}</Text>

                    { str_long[0]==false?
                        <Text style={styles.reviewText}>{review_samples[0].textContents}</Text>
                        :
                        (Shortened_1==false)?
                            <View style={{ marginBottom: BannerWidth*(1/35)}}>
                                <Text style={styles.reviewText}>{review_samples[0].textContents}</Text>
                                <View style={{width:'100%', alignItems:'center'}}>
                                    <TouchableOpacity onPress={() =>{ChangeShortened_1(true)}}>
                                        <Text style={{ color: "#a98c66", fontSize: BannerWidth*(1/28), textDecorationLine: 'underline'}}>
                                            ∧ 접어두기 ∧
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            :
                            <Text style={styles.reviewText}>
                                {review_samples[0].textContents.slice(0,74)} ...
                                <Text onPress={() =>{ChangeShortened_1(false)}}
                                      style={{ color: "#c2c2c2", fontSize: BannerWidth*(1/29), textDecorationLine: 'underline'}}>더보기</Text>
                            </Text>
                    }


                </View>
                <View style={{ width :'100%', height:1, backgroundColor:"#a98c66", marginVertical: BannerWidth*(0.005)}}/>


                <View style={{ marginRight: BannerWidth*(0.05)}} >
                    <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:BannerWidth*(1/50)}}>
                        <Text style={styles.idText}> {review_samples[1].id} </Text>
                        <View style={{ flexDirection:'row' }}>
                        {ratings2}
                        </View>
                    </View>
                    <Text style={styles.dateText}>{review_samples[1].date}</Text>

                    { str_long[1]==false?
                        <Text style={styles.reviewText}>{review_samples[1].textContents}</Text>
                        :
                        (Shortened_2==false)?
                            <>
                                <Text style={styles.reviewText}>{review_samples[1].textContents}</Text>
                                <View style={{width:'100%', alignItems:'center'}}>
                                    <TouchableOpacity onPress={() =>{ChangeShortened_2(true)}}>
                                        <Text style={{ color: "#a98c66", fontSize: BannerWidth*(1/28), textDecorationLine: 'underline'}}>
                                            ∧ 접어두기 ∧
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </>
                            :
                            <Text style={styles.reviewText}>
                                {review_samples[1].textContents.slice(0,74)} ...
                                <Text onPress={() =>{ChangeShortened_2(false)}}
                                      style={{ color: "#c2c2c2", fontSize: BannerWidth*(1/29), textDecorationLine: 'underline'}}>더보기</Text>
                            </Text>
                    }
                </View>

                {/* Button */}

                {/* 나중엔 저 event_key값을 DB에 맞게 바꿔줘야겠지!*/}
                <TouchableOpacity onPress={()=>{props.navigation.push('ReviewList',
                                                    {event_key:222, subNav: props.navigation, title:props.title})}}
                                  style={styles.seeAllButton}>
                    <Text style={styles.seeAllButtonText}>관람후기 전체보기 ({review_num})</Text>
                </TouchableOpacity>

            </View>
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
    },
    seeAllButton:{
        borderColor: "#4d5c6f",
        borderWidth:1,
        marginVertical: BannerWidth*(1/20),
        backgroundColor:'white',
        marginRight: BannerWidth*(0.05),
        height: BannerWidth*(1/9),
        alignItems:'center',
        justifyContent:'center'
    },
    seeAllButtonText:{
        color: "#4d5c6f",
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/26),
        fontWeight: "500",
        fontStyle: "normal",
    }
});

export default ReviewShortenedView;

