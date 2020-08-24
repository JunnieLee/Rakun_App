import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Alert, Dimensions} from 'react-native';

import GoBack from '~assets/icons/drawable/goback.svg';
import Share from '~assets/icons/drawable/share.svg';

// temporary hardcoded data
const img = ['https://user-images.githubusercontent.com/33515577/91074404-75331480-e677-11ea-8cc8-833638f72094.png',
    'https://user-images.githubusercontent.com/33515577/91074334-56cd1900-e677-11ea-88a9-8be6b7272d9c.png',
'https://user-images.githubusercontent.com/33515577/91076229-28047200-e67a-11ea-8b22-5c057df64cf9.png']



const BannerWidth = Dimensions.get('window').width;

const EventDetailSeeMore = props => {

    var imgs = [];

    for (var i=0; i<img.length; i++){
        imgs.push
        (<View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: img[i] }}/>
        </View>);
    }

    return(
        <View style={{backgroundColor:'white', paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
            <View style={{ flexDirection:'row', marginVertical:BannerWidth*(1/37), justifyContent: 'space-between',}}>
                <TouchableOpacity onPress={()=> props.navigation.goBack()} style={{ marginHorizontal:'5%'}}>
                    <GoBack/>
                </TouchableOpacity>
                <Text>작품 정보 더보기</Text>
                <TouchableOpacity onPress={()=>{ }} style={{ marginHorizontal:'7%'}}>
                    <Share />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {imgs}
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    imageContainer: {
        marginHorizontal:'5%',
        width: '90%', // width: ItemWidth,
        // height: ItemWidth,
        overflow: 'hidden',
        marginVertical: 3,
        height: 800, // 이거 나중에 어케 해결할꺼..?
        maxHeight: BannerWidth*20
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
        // resizeMode:'contain'
    },
});

export default EventDetailSeeMore;
