import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,Dimensions} from 'react-native';

import BlackStarFilled from '~assets/icons/drawable/blackstarfilled.svg';
import BlackStarEmpty from '~assets/icons/drawable/blackstarempty.svg';
import ShingoIcon from '~assets/icons/drawable/shingo.svg';

const BannerWidth = Dimensions.get('window').width;
const iconSize = BannerWidth*(1/25);


const ReviewItem = (props) => {

    // 1. ratings 작업 (숫자를 받아와 icon list로 만들기)
    var ratings = [ ];
    for (var i=0; i < props.rating ; i++){
        ratings.push(<Image source={require('~assets/icons/finalBlackStar.png')}
                            style={{ width:iconSize, height:iconSize, marginVertical: iconSize*(1/2)}}
                            key={i} />);
    }
    for (var i=0; i < (5-props.rating) ; i++){ratings.push(<BlackStarEmpty key={i+5}
                                                                           style={{marginVertical: iconSize*(1/2)}}
                                                                           width={iconSize}
                                                                           height={iconSize}
                                                            />);}

    // 2. 3줄을 넘어가면 <더보기> 란 만들어주기!
    var str_long = (props.text.length > 90);

    // 현재 접혀있는 상태인지 아닌지 나타내주는 state! text가 길다면 일단 디폴트는 접혀있는 상황~~
    const [Shortened, ChangeShortened] = useState( true );

    // spoiler screening 된 상태인지 아닌지를 나타내는 state하나 더 만들어주기
    const [SpoilerScreened, ChangeSpoilerScreened] = useState( props.spoiler );

    return (
        <View style={{ marginRight: BannerWidth*(0.05)}} >

            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:BannerWidth*(1/50)}}>
                <Text style={styles.idText}> {props.id} </Text>
                <View style={{ flexDirection:'row' }}>
                    {ratings}
                </View>
            </View>
            <Text style={styles.dateText}>{props.date}에 관람</Text>

            { (SpoilerScreened && props.spoiler) ?
                    <View style={{ marginVertical: BannerWidth*(0.05) }}>
                        <Text style={styles.spoilerText}>삐빅! 스포일러가 포함되어 있습니다!</Text>
                        <TouchableOpacity onPress={()=>{ChangeSpoilerScreened(false)}}>
                            <Text style={styles.spoilerTextUnderline}>보기</Text>
                        </TouchableOpacity>
                    </View>
                    : (str_long==false)?
                        <Text style={styles.reviewText}>{props.text}</Text>
                        :
                        (Shortened==false)?
                            <View style={{ marginBottom: BannerWidth*(1/35)}}>
                                <Text style={styles.reviewText}>{props.text}</Text>
                                <View style={{width:'100%', alignItems:'center'}}>
                                    <TouchableOpacity onPress={() =>{ChangeShortened(true)}}>
                                        <Text style={{ color: "#a98c66", fontSize: BannerWidth*(1/28), textDecorationLine: 'underline'}}>
                                            ∧ 접어두기 ∧
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            <Text style={styles.reviewText}>
                                {props.text.slice(0,91)} ...
                                <Text onPress={() =>{ChangeShortened(false)}}
                                      style={{ color: "#c2c2c2", fontSize: BannerWidth*(1/29), textDecorationLine: 'underline'}}>더보기</Text>
                            </Text>
            }

            <View style={{flexDirection:'row', marginHorizontal:'1%'}}>
                <TouchableOpacity onPress={()=>{}} style={{flexDirection:'row', justifyContent:'space-between', width:'13%'}}>
                    <ShingoIcon/>
                    <Text style={styles.dateText}>신고</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: BannerWidth*(1/25)}}/>
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
        fontSize: BannerWidth*(1/30),
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
    spoilerText:{
        fontFamily: "NotoSansCJKkr",
        fontSize: BannerWidth*(1/27),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#4d5c6f"
    },
    spoilerTextUnderline:{
        fontFamily: "NotoSansCJKkr",
        fontSize: BannerWidth*(1/27),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#4d5c6f",
        textDecorationLine:'underline'
    }
});

export default ReviewItem;
