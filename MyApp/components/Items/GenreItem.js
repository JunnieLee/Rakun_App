import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import FilledHeart from '../.././assets/icons/drawable/btn_like_fill.svg';
import EmptyHeart from '../.././assets/icons/drawable/btn_like.svg';

import FilledStar from '../.././assets/icons/drawable/icon_full_star.svg';
import EmptyStar from '../.././assets/icons/drawable/icon_empty_star.svg';

const BannerWidth = Dimensions.get('window').width;
const ItemWidth = BannerWidth*(0.73)*(0.5);
const iconSize = BannerWidth*(1/3)*(1/8);



// 얘가 지금 이 유저가 찜한 앤지 아닌지는 여기서 정보 받아와서 보여주자!!
// 찜하고 그거 반영하는것도 따로!

// key, image, title, date, rating, E_rating, likes, navigation

const GenreItem = (props) => {

    const [heartFilled, setheartFilled] = useState(true); // for heart // 이 정보는 관계 DB부분으로!

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
                            // 얘는 일단 나중에!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        }
                    });
                }}>
                <Image style={styles.image} source={{ uri: props.image }}/>
                </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 3, width: ItemWidth*(0.95) }}>

                <TouchableOpacity onPress={()=>{
                    props.navigation.push('EventDetail', {
                        screen: 'EventDetailPage',
                        tabBarVisible: false,
                        params: {
                            image: props.image,
                            rating:props.rating,
                            title: props.title,
                            date: props.date // 나중엔 해당 item의 key값만 받아오면 되겠지!
                            // 얘는 일단 나중에!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        }
                    });
                }}>
                    <Text style={styles.title}>{props.title}</Text>
                </TouchableOpacity>
                <Text style={styles.date}>{props.date}</Text>

                <View style={{ flexDirection:'row', paddingVertical: 10, alignItems: 'flex-start' }}>

                    <TouchableOpacity onPress = {() => { setheartFilled(heartFilled => !heartFilled) }} >
                        {heartFilled?
                            <FilledHeart width={iconSize} height={iconSize} />
                            : <EmptyHeart width={iconSize} height={iconSize} />}
                    </TouchableOpacity>
                    <Text style={styles.ratingText}> {props.likes}</Text>

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
        marginBottom: 10,
        width: ItemWidth*(0.95)
    },

    imageContainer: {
        width: ItemWidth, //'30%', // 그니까 나머지 글 등등은 75%
        height: ItemWidth,
        overflow: 'hidden',
        // marginVertical: 10
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

export default GenreItem;
