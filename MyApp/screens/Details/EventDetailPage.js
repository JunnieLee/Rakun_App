import React, { useState, Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Alert, Dimensions} from 'react-native';
import Filter from "./GenreDetailPage";

import GoBack from '~assets/icons/drawable/goback.svg';
import Share from '~assets/icons/drawable/share.svg';

const BannerWidth = Dimensions.get('window').width;

const EventDetailPage = (props) =>{

        const[headerText, setheaderText] = useState('');

        return (
            <View style={{backgroundColor:'white', paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
                <View style={{ flexDirection:'row', marginVertical:BannerWidth*(1/37), justifyContent: 'space-between',}}>
                    <TouchableOpacity onPress={()=> props.MainNav.goBack()} style={{ marginHorizontal:'5%'}}>
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
                        <View style={{ width: '27%', backgroundColor:'red'}}>
                        </View>
                        <View style={{ width: '73%'}}>
                            <Text>Hi</Text>
                        </View>
                    </View>
                    {/* Editor's Comment 및 하단 내용 */}

                    <View>
                        <Text>Editor's Comment</Text>
                    </View>
                    {/*
                        리뷰전체보기
                        관람후기쓰기 (modal?)
                        --> 요 두부분 navigation 어떻게 할지 한번 생각해보기
                     */}
                </ScrollView>
            </View>
        );


}




const styles = StyleSheet.create({
    Container : {
        flexDirection: 'row',
        backgroundColor:'white'
    },
});


export default EventDetailPage;
