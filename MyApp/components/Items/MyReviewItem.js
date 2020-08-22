import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import FilledStar from '../.././assets/icons/drawable/icon_full_star.svg';
import EmptyStar from '../.././assets/icons/drawable/icon_empty_star.svg';

const MyReviewItem = (props) => {

    var ratings = [ ];
    for (var i=0; i < props.rating ; i++){
        ratings.push( <FilledStar key={i} style={{ size: 13 }}/>);
    }
    for (var i=0; i < (5-props.rating) ; i++){
        ratings.push( <EmptyStar key={i+5} style={{ size: 13 }}/> );
    }

    return (
        <View style={styles.product}>
            {/* Image on the left */}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }}/>
            </View>
            {/* Details on the right */}
            <View style={styles.details}>
                {/* Details 1 - summary */}
                <View style={styles.detailOne}>
                    <Text style={styles.summary}>{props.summary}</Text>
                    <TouchableOpacity style={{ height : '50%', width:'20%'}} onPress = {() => {}} >
                        <Text style={{ color: "#c2c2c2", fontSize: 14, textDecorationLine: 'underline'}}>더보기</Text>
                    </TouchableOpacity>
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


    );
};

const styles = StyleSheet.create({
    product: {
        backgroundColor: 'white',
        height: 87,
        margin: 10,
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
        width: '75%',
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
        width: '90%',
        fontFamily: "AppleSDGothicNeo",
        fontSize: 14,
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
