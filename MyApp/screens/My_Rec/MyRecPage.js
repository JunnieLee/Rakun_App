import React, {Component, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Dimensions
} from 'react-native';

import MyReviewList from "../../containers/MyReviewList";
import JjimList from "../../containers/JjimList";


const BannerWidth = Dimensions.get('window').width;


const MyRecPage =  props =>  {

    // 찜을 보여줄껀지, 내리뷰를 보여줄껀지.
    // 디폴트는 찜먼저 보여주는걸로.
    const [Choice, setChoice] = useState(1); // Choice == 0 ? 찜 : 내리뷰

    const changeView = () => setChoice(Choice => Choice == 0? 1: 0);

    // 찜 갯수와 리뷰 갯수는 나중엔 이렇게 state으로 처리하는게 아니라
    // 직접 DB로부터 사용자 정보 가지고 와서 보여줘야..
    const [JJimNum, setJJimNum] = useState(0); // Choice == 0 ? 찜 : 내리뷰
    const [MyReviewNum, setMyReviewNum] = useState(0); // Choice == 0 ? 찜 : 내리뷰

    // 찜 선택 시
    var myMiniHeader_ver1 = (
        <View style = {styles.miniHeader}>
            <Text style={styles.titleFocused}> 찜 ({JJimNum}) </Text>
            <Text style={styles.titleUnFocused}> 내리뷰 ({MyReviewNum}) </Text>
            <View style={{ width: 72, height: 4, backgroundColor: '#4d5c6f' }}/>
        </View>
    );

    // 내 리뷰 선택 시
    var myMiniHeader_ver2 = (
        <View style={{ marginVertical:10 }}>
            <View style = {styles.miniHeader}>
            <Text style={styles.titleUnFocused}> 찜 ({JJimNum}) </Text>
            <Text style={styles.titleFocused}> 내리뷰 ({MyReviewNum}) </Text>
            </View>
            <View style={{ marginLeft: '25%',width: '25%', height: 4, backgroundColor: '#4d5c6f' }}/>
        </View>
    );


        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style = {styles.topHeader}>내 관람</Text>
                    { (Choice==0)? myMiniHeader_ver1 : myMiniHeader_ver2 }
                    { (Choice==0)? <JjimList /> : <MyReviewList/> }
                </View>
            </SafeAreaView>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
        marginVertical: '10%',
        marginHorizontal: '3%'
        // marginLeft: '5%'
    },
    topHeader: {
        width: '50%',
        fontFamily: "AppleSDGothicNeo",
        fontSize: 26,
        fontWeight: "100",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
    },
    miniHeader : {
        width: '50%',
        // height: 55,
        marginVertical: 10,
        flexDirection: 'row'
    },
    titleFocused : {
        // width: 72,
        width: '50%',
        height: 21,
        fontFamily: "AppleSDGothicNeo",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    titleUnFocused : {
        // width: 72,
        width: '50%',
        height: 21,
        fontFamily: "AppleSDGothicNeo",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#c2c2c2"
    },

    helperContainer : {

    }
});


export default MyRecPage;
