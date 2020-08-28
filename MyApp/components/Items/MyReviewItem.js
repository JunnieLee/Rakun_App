import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FilledStar from '../.././assets/icons/drawable/icon_full_star.svg';
import EmptyStar from '../.././assets/icons/drawable/icon_empty_star.svg';


const BannerWidth = Dimensions.get('window').width;

const MyReviewItem = (props) => {

    // const navigation = useNavigation();

    var ratings = [ ];
    for (var i=0; i < props.rating ; i++){
        ratings.push( <FilledStar key={i} style={{ size: 13 }}/>);
    }
    for (var i=0; i < (5-props.rating) ; i++){
        ratings.push( <EmptyStar key={i+5} style={{ size: 13 }}/> );
    }

    return (
        <TouchableOpacity onPress={()=>{props.navigation.push('MyReviewDetail',
                                                            {   image:props.image,
                                                                rating:props.rating,
                                                                summary: props.summary,
                                                                nav: props.navigation,
                                                                date:props.date,
                                                            } ); }}>
                            {/* 나중엔 해당 review key 같은것만 넘겨주면 되겠지*/}
        <View style={styles.product}>
            {/* Image on the left */}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }}/>
            </View>
            {/* Details on the right */}
            <View style={styles.details}>
                {/* Details 1 - summary */}
                <View style={styles.detailOne}>
                    <Text style={styles.summary}>
                        {props.summary.length > 43 ?
                            <>
                            {props.summary.slice(0,43)+' ... '}
                                <Text style={{ color: "#c2c2c2", fontSize: 14, textDecorationLine: 'underline'}}>더보기 </Text>
                            </>
                            : props.summary
                        }
                    </Text>

                </View>
                {/* Details 2 - ratings and date */}
                <View style={styles.detailTwo}>
                    <View style={{ flexDirection:'row', alignItems: 'flex-start' }}>
                        { ratings }
                    </View>
                    <Text style={styles.date}>{props.date}</Text>
                </View>
            </View>

        </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    product: {
        backgroundColor: 'white',
        height: BannerWidth*(1/5), // 87
        margin: BannerWidth*(0.025),
        // marginVertical: 10,
        flexDirection: 'row'
    },
    imageContainer: {
        width: '25%', // 그니까 나머지 글 등등은 75%
        height: '100%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
        // resizeMode:'contain'
    },
    details: {
        //alignItems: 'flex-start',
        width: '80%',
        // height: '25%',
        paddingHorizontal: '5%'//10
    },

    detailOne: {
        height: '50%', //35
        marginBottom: 10,
        flexDirection:'row'
    },

    summary: {
        // width: 246,
        // height: 34,
        // width: '90%',
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/31),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    detailTwo: {
        height: '50%'
    },

    date: {
        // width: 68,
        // height: 17,
        fontFamily: "AppleSDGothicNeo",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#c2c2c2"
    }
});

export default MyReviewItem;
