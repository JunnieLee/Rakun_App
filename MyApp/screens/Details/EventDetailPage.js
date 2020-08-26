import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Alert, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GoBack from '~assets/icons/drawable/goback.svg';
import Share from '~assets/icons/drawable/share.svg';

import BlackStarFilled from '~assets/icons/drawable/blackstarfilled.svg';

//import BlackStarFilled from '~assets/icons/drawable/hellostar.svg';


/*
<Image source={require('~assets/icons/finalBlackStar.png')} style={{ width: }}/>
 */


import ReviewShortenedView from '~screens/Review/ReviewShortenedView';
import SubBottomTab from "~components/SubBottomTab";

const BannerWidth = Dimensions.get('window').width;
const ItemWidth = BannerWidth*(0.73);
const iconSize = BannerWidth*(1/25);


// temporary hard-coded data --> gotta work on this one later one!
const place = "블루스퀘어 인터파크홀";
const expected_rating = 3.9;
const editorsComment = '영국의 전설적인 뮤지컬 작곡가 앤드루 로이드 웨버의 작품이자, ' +
    '세계 4대 뮤지컬 중 하나. 파리 오페라 하우스를 배경으로 펼쳐지는 사랑과 집착의 이야기.' +
    '특유의 샹들리에 신은 공연의 백미. 집중의 끈을 놓지 마세요!';
const tips = '연출    |  라이너 프리드\n' +
    '캐스팅 |  조나단 록스머스, 클레어 라이언\n' +
    '작가    |  가스통 르두';


const EventDetailPage = ({props, route}) =>{

    const navigation = useNavigation();

    const { title } = route.params;
    const { image } = route.params;
    const { rating } = route.params;
    const { date } = route.params;

    const {MyRecNav} = route.params; // 어떻게 사용할 것인가????????


    const [heartFilled, setheartFilled] = useState(false); // for heart
    const[headerText, setheaderText] = useState(''); // 상단 제목 넣어야할때 사용

        return (
            <View style={{backgroundColor:'white', paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
                <View style={{ flexDirection:'row', marginVertical:BannerWidth*(1/37), justifyContent: 'space-between',}}>
                    <TouchableOpacity onPress={()=> navigation.goBack()} style={{ marginHorizontal:'5%'}}>
                        <GoBack/>
                    </TouchableOpacity>
                    <Text>{headerText}</Text>
                    <TouchableOpacity onPress={()=>{ }} style={{ marginHorizontal:'7%'}}>
                        <Share />
                    </TouchableOpacity>
                </View>
                <View style={{ width:'100%', height:BannerWidth*(1/37)}}/>


                <ScrollView>
                    {/* 기본 정보 */}
                    <View style={styles.Container}>
                        <View style={{ width: '27%'}}>
                        </View>
                        <View style={{ width: '73%'}}>

                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: image }}/>
                            </View>
                            <Text style={styles.title}>{title}</Text>
                            <View style={{ width:'100%', backgroundColor:'black', height: 1}} />
                            {/*Details*/}
                            <View style={{ marginVertical: BannerWidth*(1/25)}}>
                                <Text style={styles.detailText}>날짜 | {date}</Text>
                                <Text style={styles.detailText}>장소 | {place}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.detailText}>총평점 | </Text>
                                    <Image source={require('~assets/icons/finalBlackStar.png')}
                                           style={{ width:iconSize, height:iconSize, marginVertical: iconSize*(1/2)}}/>
                                    <Text style={styles.detailText}> {rating}</Text>
                                    <Text style={styles.detailText}>       예상 평점 | </Text>
                                    <Image source={require('~assets/icons/finalBlackStar.png')}
                                           style={{ width:iconSize, height:iconSize, marginVertical: iconSize*(1/2) }}/>
                                    <Text style={styles.detailText}> {expected_rating}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection:'row'}}>
                                <TouchableOpacity
                                    style={styles.MoreButton}
                                    onPress={()=>{}}
                                >
                                    <Text style={styles.MoreButtonText}>예매하기</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.MoreButton}
                                    onPress={()=>{navigation.push( 'EventDetailSeeMore', {eventKey: 989898} )}}
                                >
                                    <Text style={styles.MoreButtonText}>작품 정보 더보기</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    {/* Editor's Comment 및 하단 내용 */}
                    <View style={{ marginLeft:'5%'}}>
                        <View style={{ width:'100%', backgroundColor:'black', height: 1, marginTop: BannerWidth*(1/18) }}/>
                        <View style={{ marginRight:BannerWidth*(0.05)}}>
                            <Text style={styles.miniTitle}>Editor's Comment</Text>
                            <Text style={styles.detailText}>
                                {editorsComment}
                            </Text>
                        </View>
                        <View style={{ width:'100%', backgroundColor:'black', height: 1, marginTop: BannerWidth*(1/18) }}/>
                        <View style={{ marginRight:BannerWidth*(0.05)}}>
                            <Text style={styles.miniTitle}>관람 팁</Text>
                            <Text style={styles.detailText}>
                                {tips}
                            </Text>
                        </View>
                        <View style={{ width:'100%', backgroundColor:'black', height: 1, marginTop: BannerWidth*(1/18) }}/>

                        {/*
                            리뷰전체보기
                            관람후기쓰기 (modal?)
                            --> 요 두부분 navigation 어떻게 할지 한번 생각해보기
                         */}
                    </View>
                        <ReviewShortenedView navigation={navigation} eventKey={989898} title={title}/>
                        {/* 추후엔 해당 작품의 key도 props로 함께 넘겨줘야겠지*/}


                    <View style={{ width:'100%', height:BannerWidth*(1/6)}}/>
                    <SubBottomTab navigation={navigation} eventKey={989898}/>
                    <View style={{ width:'100%', height:BannerWidth*(1/8)}}/>

                </ScrollView>
                <SubBottomTab navigation={navigation}
                              eventKey={989898} viewForReviewList={false}
                              title={title} image={image}/>


            </View>
        );


}




const styles = StyleSheet.create({
    Container : {
        flexDirection: 'row',
        backgroundColor:'white'
    },
    product: {
        // paddingHorizontal:'1%',
        backgroundColor: 'white',
        marginBottom: 10,
        width: ItemWidth
    },

    imageContainer: {
        width: ItemWidth, //'30%', // 그니까 나머지 글 등등은 75%
        height: ItemWidth,
        overflow: 'hidden',
        marginBottom: BannerWidth*(1/40)
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden'
        // resizeMode:'contain'
    },
    title: {
        fontFamily: "AppleSDGothicNeo",
        fontSize:  BannerWidth*(1/19),// 21
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginVertical: BannerWidth*(1/40)
    },
    detailText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/25),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        lineHeight: BannerWidth*(1/13)
    },
    MoreButton :{
        // borderColor: "#4d5c6f",
        borderWidth: 1,
        width: ItemWidth*(1/2),
        height: ItemWidth*(1/6),
        justifyContent: 'center',
        borderLeftColor:"#4d5c6f",
        borderRightColor:'white',
        borderTopColor:"#4d5c6f",
        borderBottomColor: "#4d5c6f"
    },
    MoreButtonText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/25),
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/15),
        letterSpacing: 0,
        textAlign: "center",
        color: "#4d5c6f"
    },
    miniTitle:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/20),
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/10),
        letterSpacing: 0,
        color: "#000000",
        marginVertical: BannerWidth*(1/50)
    }
});


export default EventDetailPage;
