import React, { useState, Component } from 'react';
import {View, Text, SafeView, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, TextInput} from 'react-native';

import CheckBox from '@react-native-community/checkbox';


import CloseIcon from '~assets/icons/drawable/close.svg';


const BannerWidth = Dimensions.get('window').width;


// temporary hard-coded data
const EventInfo = {
    title: '오페라의 유령',
    image: 'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png'
}



const WriteReviewPage = ({props,route}) => {

    // 상세 작성란이 열려있는지 접혀있는지의 정보를 담고 있는 state
    const [Open, setOpen] = useState(false);

    // 작성란과 관련된 state
    const [Rating, setRating] = useState(0);
    const [Date, setDate] = useState(null);
    const [Time, setTime] = useState(null);
    const [Weather, setWeather] = useState(null);
    const [ReviewTitle, setReviewTitle] = useState('');
    const [ReviewContent, setReviewContent] = useState('');
    const [Spoiler, setSpoiler] = useState(false); // true or false가 되어야 함
    const [Secret, setSecret] = useState(false); // true or false가 되어야 함


    // route에서 받아온 param값들 (--> eventKey만 받아오면 나머지는 필요없어질 것 같음)
    const {eventKey} = route.params;
    const {subNav} = route.params;
    // const {image} = route.params;
    // const {title} = route.params;


    // 열리고 닫히는 view 구현

    var Closed = (
        <View style={{ margin: BannerWidth*(0.02), flexDirection:'row', justifyContent:'space-between' }}>
            <View style={{ backgroundColor:'red'}}>
                {/* RATINGS ICONS --> MAKE IT TOUCHABLE*/}
                {Rating==0? <Text style={styles.detailsText}> 별점을 달아주세요! </Text>
                    : <Text style={styles.detailsText}> {Date} {Time}에 관람. 날씨정보</Text>}
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: EventInfo.image }}/>
            </View>
        </View>
    );

    var Opened = (
        <View style={{ margin: BannerWidth*(0.02) }}>

        </View>
    );

    return(
            <View style={{backgroundColor:'#d4d2d2', paddingTop: Platform.OS === 'android' ? 25 : 0}}>
                <View style={{ marginVertical:BannerWidth*(1/20), backgroundColor:'white',
                                borderTopLeftRadius: 15, borderTopRightRadius: 15,}}>

                    {/* Top Header Part*/}
                    <View style={{ flexDirection:'row'}}>
                        <View style={{width:'35%'}}/>
                        <View style={{ flexDirection:'row', justifyContent:'space-between', width:'65%'}}>
                            <Text style={styles.headerText}>관람 후기 쓰기</Text>
                            <TouchableOpacity onPress={()=> subNav.goBack()}
                                              style={{ marginHorizontal:'5%', marginVertical:BannerWidth*(1/20),}}>
                                <CloseIcon height={BannerWidth*(1/20)}/>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <ScrollView contentContainerStyle={{ marginHorizontal:'5%'}} >
                        <Text style={styles.eventTitleText}>{EventInfo.title}</Text>

                        {/* 접히고 열리는 rating & 상세정보 입력 부분 ------------------------------------ */}
                        <View style={{ width:'100%', borderColor:'#4d5c6f', borderWidth:1,
                            marginVertical:BannerWidth*(1/50)}}>
                            {Open? Opened: Closed}
                        </View>

                        {/* 제목과 내용 넣는 text input 부분 ------------------------------------ */}
                        <TextInput
                            style={{width:'100%', height:BannerWidth*(1/10),
                                backgroundColor:"#f2f2f2", marginVertical:BannerWidth*(0.03)}}
                            onChangeText={text => setReviewTitle(text)}
                            value={ReviewTitle}
                            placeholder={'    제목을 입력하세요.'}
                            placeholderTextColor={"#9c9c9c"}
                            multiline={true}
                            textAlignVertical={'top'}
                        />
                        <TextInput
                            style={{width:'100%', height:BannerWidth*(0.9),
                                    backgroundColor:"#f2f2f2", marginBottom:BannerWidth*(0.08)}}
                            onChangeText={text => setReviewContent(text)}
                            value={ReviewContent}
                            placeholder={
                                ' \n'+
                                '    자유롭게 감상평을 남겨주세요. \n' +
                            '    혼자만 간직하고 싶다면 비공개 체크를 하시면 돼요. :)'}
                            placeholderTextColor={"#9c9c9c"}
                            multiline={true}
                            textAlignVertical={'top'}
                        />

                        {/* 하단 체크박스 부분  ---------------------------------------------------*/}
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'50%', flexDirection:'row'}}>
                                <CheckBox
                                    value={Spoiler}
                                    onValueChange={()=>setSpoiler(!Spoiler)}
                                    style={{ alignSelf: "center" }}

                                />
                                <Text style={styles.checkBoxText}>스포 포함</Text>
                            </View>
                            <View style={{width:'50%', flexDirection:'row'}}>
                                <CheckBox
                                    value={Secret}
                                    onValueChange={()=>setSecret(!Secret)}
                                    style={{ alignSelf: "center" }}
                                />
                                <Text style={styles.checkBoxText}>나만 보기</Text>
                            </View>
                        </View>

                        {/* 저장버튼 --------------------------------------------------- */}
                        <TouchableOpacity
                            style={{ width: '100%', height:BannerWidth*(1/9), backgroundColor:'#4d5c6f',
                                    marginTop: BannerWidth*(1/30), justifyContent:'center'}}
                            onPress={()=>{}}>
                            <Text style={styles.saveButtonText}>관람 후기 저장</Text>
                        </TouchableOpacity>

                        <View style={{ width:'100%', height:BannerWidth*(1/3)}}/>

                    </ScrollView>

                </View>

            </View>
    );

}

const styles = StyleSheet.create({
    headerText : {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/25),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginHorizontal:'5%',
        marginVertical:BannerWidth*(1/20)
    },
    eventTitleText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/18),
        fontWeight: "100",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/10),
        letterSpacing: 0,
        color: "#000000",
        marginBottom: BannerWidth*(1/50)
    },
    saveButtonText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/25),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff",
        marginHorizontal:'7%',
        marginVertical:'3%'
    },
    checkBoxText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/28),
        fontWeight: "200",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/14),
        letterSpacing: 0,
        color: "#000000"
    },
    detailsText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/30),
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/14),
        letterSpacing: 0,
        color: "#7f7f7f"
    },
    imageContainer: {
        width: BannerWidth*(0.15), //'30%', // 그니까 나머지 글 등등은 75%
        height: BannerWidth*(0.15),
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden'
        // resizeMode:'contain'
    },
});

export default WriteReviewPage;
