import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FilledHeart from '../.././assets/icons/drawable/btn_like_fill.svg';
import EmptyHeart from '../.././assets/icons/drawable/btn_like.svg';

import FilledStar from '../.././assets/icons/drawable/icon_full_star.svg';
import EmptyStar from '../.././assets/icons/drawable/icon_empty_star.svg';

const RecommendationItem = (props) => {

    var ratings = [ ];

    for (var i=0; i < props.rating ; i++){
        ratings.push(
            <FilledStar key={i} style={{ size: 13 }}/>
        );
    }
    for (var i=0; i < (5-props.rating) ; i++){
        ratings.push(
            <EmptyStar key={i+5} style={{ size: 13 }}/>
        );
    }



    const [heartFilled, setheartFilled] = useState(false); // for heart
    // const [s, sets] = useState(props.rating); // for star

    return (
        <View style={styles.product}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={()=>{

                        props.navigation.push('EventDetail', {
                            screen: 'EventDetailPage',
                            tabBarVisible: false,
                            params: {
                                image: props.image,
                                rating:props.rating,
                                title: props.title,
                                date: props.date // 나중엔 해당 item의 key값만 받아오면 되겠지!
                            }
                        });
                    }}>
                    <Image style={styles.image}
                           source={{ uri: props.image }}
                         />
                    </TouchableOpacity>
                </View>
            <View style={styles.details}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('EventDetail')}}>
                        <Text style={styles.title}>{props.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ size:22, alignItems: 'flex-end', marginVertical: 4}}
                                      onPress = {() => { setheartFilled(heartFilled => !heartFilled) }} >
                        {heartFilled? <FilledHeart /> : <EmptyHeart />}
                    </TouchableOpacity>
                </View>
                <Text style={styles.date}>{props.date}</Text>
                <View style={{ flexDirection:'row', paddingVertical: 10, alignItems: 'flex-start' }}>
                { ratings }
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
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
