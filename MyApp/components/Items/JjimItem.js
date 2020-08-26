import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import FilledHeart from '../.././assets/icons/drawable/btn_like_fill.svg';
import EmptyHeart from '../.././assets/icons/drawable/btn_like.svg';

import FilledStar from '../.././assets/icons/drawable/icon_full_star.svg';
import EmptyStar from '../.././assets/icons/drawable/icon_empty_star.svg';

import { useNavigation } from '@react-navigation/native';

const BannerWidth = Dimensions.get('window').width;
const iconSize = BannerWidth*(1/3)*(1/8);

const JjimItem = (props) => {

    const navigation = props.navigation;

    const [heartFilled, setheartFilled] = useState(true); // for heart

    return (
        <View style={styles.product}>
            <TouchableOpacity onPress={()=>{props.navigation.push('EventDetail',
                {
                    screen: 'EventDetailPage',
                    params: {
                        MyRecNav: navigation, title:props.title, image: props.image, rating: props.rating, date:props.date
                    },
                });} }>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.image }}/>
                </View>
            </TouchableOpacity>

            <View style={{ marginHorizontal: 3 }}>

                <TouchableOpacity onPress={()=>{props.navigation.push('EventDetail',
                    {
                        screen: 'EventDetailPage',
                        params: {
                            MyRecNav: navigation, title:props.title, image: props.image, rating: props.rating, date:props.date
                        },
                    });} }>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.date}>{props.date}</Text>
                </TouchableOpacity>

                <View style={{ flexDirection:'row', paddingVertical: 10, alignItems: 'flex-start' }}>
                    <TouchableOpacity onPress = {() => { setheartFilled(heartFilled => !heartFilled) }} >
                        {heartFilled?
                            <FilledHeart width={iconSize} height={iconSize} />
                            : <EmptyHeart width={iconSize} height={iconSize} />}
                    </TouchableOpacity>

                    <View style={{ marginLeft:'8%', flexDirection:'row'}}>
                        <FilledStar width={iconSize+6} height={iconSize}/>
                        <Text style={styles.ratingText}>{props.rating}  예상별점</Text>
                    </View>
                </View>

            </View>

            </View>

    );
};

const styles = StyleSheet.create({
    product: {
        // paddingHorizontal:'1%',
        backgroundColor: 'white',
        // height: 330, --> 퍼센트로 표현 가능하려낭
        // margin: 20
        marginBottom: 10,
        width: BannerWidth*(0.3)
    },

    imageContainer: {
        width: BannerWidth*(0.3), //'30%', // 그니까 나머지 글 등등은 75%
        height: BannerWidth*(0.3),
        overflow: 'hidden',
        marginVertical: 10
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden'
        // resizeMode:'contain'
    },
    details: {
        // alignItems: 'flex-start',
        height: '25%',
        padding: 10
    },
    title: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    date: {
        width: '100%',
        fontFamily: "AppleSDGothicNeo",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f7f7f"
    },
    ratingText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f7f7f"
    }
});

export default JjimItem;
