import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Rating }from 'react-native-ratings';
import FilledHeart from '../.././assets/icons/drawable/btn_like_fill.svg';
import EmptyHeart from '../.././assets/icons/drawable/btn_like.svg';

const RecommendationItem = (props) => {

    const [heartFilled, setheartFilled] = useState(false);

    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                       source={{ uri: 'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png' }}
                     />
                {/* source={{ uri: props.image }}*/}
            </View>
            <View style={styles.details}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title} 오페라의 유령 </Text>
                    <TouchableOpacity style={{ size:22, alignItems: 'flex-end'}}
                                      onPress = {() => { setheartFilled(heartFilled => !heartFilled) }} >
                        {heartFilled? <FilledHeart /> : <EmptyHeart />}
                    </TouchableOpacity>
                </View>

                <Text style={styles.date}>{props.date} 2020.03.14~2020.08.08 </Text>
                <Rating
                    // ratingColor='red'
                    type='custom'
                    ratingBackgroundColor='white'
                    ratingColor= '#a98c66'
                    imageSize={13}
                    style={{ paddingVertical: 10, alignItems: 'flex-start' }}
                    readonly={true}
                />
            </View>
                {/* 별점 넣기*/}
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        // shadowColor: 'white',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 8,
        // elevation: 5,
        // borderRadius: 10,
        backgroundColor: 'white',
        height: 330,
        // margin: 20
        marginBottom: 10,
    },
    imageContainer: {
        width: '100%',
        height: '70%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
        // resizeMode:'contain'
    },
    details: {
        // alignItems: 'flex-start',
        height: '25%',
        padding: 10
    },
    titleContainer: {
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginVertical: 4
    },
    date: {
        width: '100%',
        height: 17,
        fontFamily: "AppleSDGothicNeo",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f7f7f"
    }
});

export default RecommendationItem;
