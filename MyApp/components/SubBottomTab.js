import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Alert, Dimensions} from 'react-native';


import WhiteHeartFilled from '~assets/icons/drawable/whiteheartfilled.svg';
import WhiteHeartEmpty from '~assets/icons/drawable/whiteheartempty.svg';
import Comment from '~assets/icons/drawable/comment.svg';


const BannerWidth = Dimensions.get('window').width;

const SubBottomTab = props => {

    const[heartFilled, SetHeartFilled] = useState(true); // 원랜 props.heart 등과 같이 받아와서 state로 쓰겠지

    const[ShowTitle, SetShowTitle] = useState(props.viewForReviewList);

    function onClick (props) {
        SetShowTitle(!ShowTitle);
        props.navigation.push('ReviewList', {eventKey:props.eventKey, subNav: props.navigation, title:props.title});
    }

    return(
        <View style={{ backgroundColor: "#4d5c6f", width:'100%',
                        height: BannerWidth*(1/6), justifyContent:'center'}}>
            <View style={{ marginHorizontal: '5%', flexDirection: 'row', width:'100%', alignItems:'stretch'}}>
                <View style={{ flexDirection: 'row', width: '60%'}}>
                    <TouchableOpacity onPress={()=>SetHeartFilled(!heartFilled)} style={{marginTop:BannerWidth*(0.01)}}>
                        {heartFilled? <WhiteHeartFilled/>:<WhiteHeartEmpty/>}
                    </TouchableOpacity>
                    {/* event_key 는 props에서 받아와서 해당 꺼에 맞게....*/}

                    {(ShowTitle==true)?
                        <Text style={styles.TitleText}>
                            {props.title}
                        </Text>
                        :
                            <TouchableOpacity
                                onPress={()=>{onClick(props)}}
                                style={{ marginHorizontal: BannerWidth*(0.05), marginTop: BannerWidth*(0.01)}}>
                                <Comment/>
                            </TouchableOpacity>
                    }


                </View>

                <View style={{width: '30%', justifyContent:'flex-end', flexDirection:'row'}}>
                <TouchableOpacity
                    onPress={()=>{props.navigation.push("WriteReview", {eventKey:props.eventKey,
                                                                        subNav: props.navigation})}}>
                    <Text style={styles.ButtonText}>관람후기 쓰기</Text>
                </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    ButtonText:{
        color: "#d6c1a4",
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/25),
        fontWeight: "500",
        fontStyle: "normal",
        marginTop: BannerWidth*(0.01)
    },
    TitleText:{
        color: "white",
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/20),
        fontWeight: "500",
        fontStyle: "normal",
        marginHorizontal: BannerWidth*(0.03)
    }
});

export default SubBottomTab;
