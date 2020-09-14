import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const BannerWidth = Dimensions.get('window').width;

// props 종류
/*
img, author, title, abstract, date,
duration, imgContainerStyle, navigation
 */

var ImageBoxWidth = null;

const MagazineItem = (props) => {

    const navigation = useNavigation();

    // 일단 image container style을 미리 정해주기
    // var ImageBoxWidth = null;

    var ImageBoxStyle = null;

    if (props.imgContainerStyle==1){
        ImageBoxStyle = styles.imageContainer1;
    } else if (props.imgContainerStyle==2){
        ImageBoxStyle = styles.imageContainer2;
    } else if (props.imgContainerStyle==3){
        ImageBoxStyle = styles.imageContainer3;
    }


    return (
        <View style={styles.product}>
            <View style={ImageBoxStyle}>
                <TouchableOpacity onPress={()=>{navigation.push('MagazineDetail', {ID:props.ID});}}>
                    <Image style={styles.image} source={{ uri: props.img }}/>
                </TouchableOpacity>
            </View>

            <View style={styles.details}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={()=>{navigation.push('MagazineDetail', {ID:props.ID});}}>
                        <Text style={styles.title}>{props.title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginRight: '6%', marginTop:BannerWidth*(0.01)}}>
                    <Text style={styles.abstractStyle}>{props.abstract}</Text>
                    <Text style={styles.detailText}>by. {props.author} | {props.date} | {props.duration}분 소요</Text>
                </View>
            </View>

        </View>

    );
}


const styles = StyleSheet.create({
    product: {
        backgroundColor: 'white',
        height: BannerWidth*(0.6),
        // flex: 1,
        marginBottom:BannerWidth*(0.01)
    },
    imageContainer1: {
        width: '50%',
        height: '60%',
        overflow: 'hidden'
    },
    imageContainer2: {
        width: '75%',
        height: '60%',
        overflow: 'hidden'
    },
    imageContainer3: {
        width: '100%',
        height: '60%',
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
        marginVertical: BannerWidth*(1/50)
    },
    titleContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginRight: '10%'
    },
    title: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/23),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginVertical: 4
    },
    abstractStyle: {
        width: '100%',
        // height: 17,
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/30),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f7f7f"
    },
    detailText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/30),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4d5c6f",
        marginVertical:BannerWidth*(0.02)
    }
});

export default  MagazineItem;
