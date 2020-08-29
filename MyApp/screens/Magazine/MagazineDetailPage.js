import React, {useState} from 'react';
import {View, Text, Dimensions, Image, StatusBar, ScrollView, StyleSheet} from 'react-native';

import AutoHeightImage from 'react-native-auto-height-image';


import body from '~screens/Magazine/MagazineDetailInfo';

const BannerWidth = Dimensions.get('window').width;


// temporary hard-coded data

const mainImage = 'https://user-images.githubusercontent.com/33515577/91139658-60439900-e6ea-11ea-853f-86db02c507c9.png';
const title = '하나의 바이올린을 \n만들기까지';
const author = '홍지연';
const date = '2020.07.04';
const duration = 3;
const caption_full = '올해는 베토벤 탄생 250주년입니다. 전설적인 도입부로 유명한 교향곡 5번 < 운명 > 은 운명에 의한 몸부림과 희망, ' +
    '의심과 승리를 다루는 곡입니다. 7월 3일과 4일, 서울시립교향악단의 < 운명 >을 즐겨보시는 건 어떨까요?'

// body 는 넘 길어서 따로 파일 만들어서 import 해오는 식으로 일단 만듦.
// body.blocks 내
// type=="atomic" 이면 data.type이 image가 맞는지 확인하고 맞으면 data.src 가 image URL
// type=="header-two"이면 소제목
// type=="unstyled"면 일반텍스트

const MagazineDetailPage = (props) => {


    const content_view = [];
    // 종류 = 이미지, 소제목, 텍스트
    const chunkNum = body.blocks.length;

    for (var i=0; i< chunkNum; i++){

        const content = body.blocks[i];

        if (content.type=='header-two'){ // type 1. 소제목
            content_view.push(
                <Text style={styles.bodyTitleText} key={i}>{content.text}</Text>
            );
        } else if (content.type=='unstyled'){ // type 2. 텍스트
            content_view.push(
                <Text style={styles.bodyPlainText} key={i}>{content.text}</Text>
            );
        } else if (content.type=='atomic'){
            if (content.data.type=='image'){ // type 3. 이미지
                content_view.push(
                    <View  key={i} style={styles.bodyImageContainer}>
                        <AutoHeightImage
                            width={BannerWidth*(0.83)}
                            source={{uri: content.data.src}}
                        />
                    </View>
                );
            }
        }
    }

    return(
        <ScrollView contentContainerStyle={{backgroundColor:"#f2f2f2"}}>
            <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true}/>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: mainImage}}/>
            </View>
            <View style={{ backgroundColor: 'white', position: 'absolute',
                            top: BannerWidth*(0.85), zIndex:10, marginLeft:'8%'}}>
                <View style={{ margin: BannerWidth*(0.07)}}>
                    <Text style={styles.TitleText}>{title}</Text>
                    <Text style={styles.detailText}>
                        by. {author} | {date} | {duration}분 소요
                    </Text>
                    <Text style={styles.captionText}>{caption_full}</Text>
                </View>
            </View>
            <View style={{height:300}}/>
            <View>{content_view}</View>
            <View style={{height:100}}/>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    TitleText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/14),
        fontWeight: "100",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/10),
        letterSpacing: 0,
        color: "#000000",
        textAlign: "left"
    },
    detailText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/28),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4d5c6f",
        marginVertical:BannerWidth*(0.02)
    },
    captionText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/25),
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/17),
        letterSpacing: 0,
        color: "#595959",
        marginTop:BannerWidth*(0.02)
    },
    imageContainer: {
        width: BannerWidth,
        height: BannerWidth,
        overflow: 'hidden',
        //zIndex:0,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
        // resizeMode:'contain'
    },
    bodyTitleText: {
        marginLeft: BannerWidth*(0.05),
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.045), //18,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: BannerWidth*(0.06),
        letterSpacing: 0,
        color: "#000000",
        marginVertical: BannerWidth*(0.015)
    },
    bodyPlainText: {
        marginLeft: BannerWidth*(0.17),
        marginRight: BannerWidth*(0.05),
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.04),//16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: BannerWidth*(0.075),
        letterSpacing: 0,
        color: "#000000",
        marginTop: BannerWidth*(0.02),
        marginBottom: BannerWidth*(0.04)
    },
    bodyImageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: BannerWidth*(0.17),
        marginBottom: BannerWidth*(0.08),
    },
});


export default MagazineDetailPage;
