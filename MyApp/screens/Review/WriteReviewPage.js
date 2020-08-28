import React, { useState, Component } from 'react';
import {View, Text, SafeView, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, TextInput} from 'react-native';

import TextInputMask from 'react-native-text-input-mask';

import CheckBox from '@react-native-community/checkbox';


import CloseIcon from '~assets/icons/drawable/close.svg';
import BlueStarEmpty from '~assets/icons/drawable/bluestarempty.svg';
import BlueStarFilled from '~assets/icons/drawable/bluestarfilled.svg';

import UnfocusedSunny from '~assets/icons/drawable/unfocusedsunny.svg';
import UnfocusedCloudy from '~assets/icons/drawable/unfocusedcloudy.svg';
import UnfocusedRainy from '~assets/icons/drawable/unfocusedrainy.svg';
import UnfocusedThunder from '~assets/icons/drawable/unfocusedthunder.svg';
import UnfocusedSnowy from '~assets/icons/drawable/unfocusedsnowy.svg';
import UnfocusedWindy from '~assets/icons/drawable/unfocusedwindy.svg';

import Sunny from '~assets/icons/drawable/sunny.svg';
import Cloudy from '~assets/icons/drawable/cloudy.svg';
import Rainy from '~assets/icons/drawable/rainy.svg';
import Thunder from '~assets/icons/drawable/thunder.svg';
import Snowy from '~assets/icons/drawable/snowy.svg';
import Windy from '~assets/icons/drawable/windy.svg';





const BannerWidth = Dimensions.get('window').width;
const iconSize = BannerWidth*(1/10);

// temporary hard-coded data
const EventInfo = {
    title: '오페라의 유령',
    image: 'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png'
};



const WriteReviewPage = ({props,route}) => {

    // 상세 작성란이 열려있는지 접혀있는지의 정보를 담고 있는 state
    const [Open, setOpen] = useState(true);


    // 작성란과 관련된 state
    const [Rating, setRating] = useState(0);
    const [Date, setDate] = useState(null);
    const [Time, setTime] = useState(null);
    const [Weather, setWeather] = useState(null);
    const [ReviewTitle, setReviewTitle] = useState('');
    const [ReviewContent, setReviewContent] = useState('');
    const [Spoiler, setSpoiler] = useState(false); // true or false가 되어야 함
    const [Secret, setSecret] = useState(false); // true or false가 되어야 함


    const [DetailsFilled, setDetailsFilled] = useState(false);

    // setDetailsFilled((Date!=null || Time!=null || Weather!=null));

    // route에서 받아온 param값들 (--> eventKey만 받아오면 나머지는 필요없어질 것 같음)
    const {eventKey} = route.params;
    const {subNav} = route.params;
    // const {image} = route.params;
    // const {title} = route.params;


    // 열리고 닫히는 view 구현

    var Closed = (
        <View style={{ margin: BannerWidth*(0.04), flexDirection:'row', justifyContent:'space-between' }}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: EventInfo.image }}/>
            </View>
            <View style={{ margin: BannerWidth*(0.02)}}>
                <View style={{ flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{setRating(1)}} style={{marginLeft:iconSize*(1/10)}}>
                        { (Rating < 1)?
                            <BlueStarEmpty height={iconSize} width={iconSize*(5/6)}/> :
                            <BlueStarFilled height={iconSize} width={iconSize*(5/6)}/>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setRating(2)}} style={{marginLeft:iconSize*(1/10)}}>
                        { (Rating < 2)?
                            <BlueStarEmpty height={iconSize} width={iconSize*(5/6)}/> :
                            <BlueStarFilled height={iconSize} width={iconSize*(5/6)}/>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setRating(3)}} style={{marginLeft:iconSize*(1/10)}}>
                        { (Rating < 3)?
                            <BlueStarEmpty height={iconSize} width={iconSize*(5/6)}/> :
                            <BlueStarFilled height={iconSize} width={iconSize*(5/6)}/>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setRating(4)}} style={{marginLeft:iconSize*(1/10)}}>
                        { (Rating < 4)?
                            <BlueStarEmpty height={iconSize} width={iconSize*(5/6)}/> :
                            <BlueStarFilled height={iconSize} width={iconSize*(5/6)}/>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setRating(5)}} style={{marginLeft:iconSize*(1/10)}}>
                        { (Rating < 5)?
                            <BlueStarEmpty height={iconSize} width={iconSize*(5/6)}/> :
                            <BlueStarFilled height={iconSize} width={iconSize*(5/6)}/>
                        }
                    </TouchableOpacity>
                </View>
                {(Rating==0)? <Text style={styles.detailsText}> 별점을 달아주세요! </Text>
                    :(Open)? null :
                        <View style={{flexDirection:'row'}}>
                            {Date!=null? <Text style={styles.detailsText}> {Date} </Text>:null}
                            {Time!=null? <Text style={styles.detailsText}> {Time} </Text>:null}
                            {(Date!=null || Time!=null)?  <Text style={styles.detailsText}>에 관람.  </Text> : null}
                            {Weather!=null? <Text style={styles.detailsText}>{Weather}</Text>:null}
                        </View>
                    }
            </View>
            {/* 요기에 버튼 들어가면 될듯! */}
            <TouchableOpacity onPress={()=>{setOpen(!Open);
                setDetailsFilled((Date!=null || Time!=null || Weather!=null));}}
                              style={{justifyContent:'center', margin: BannerWidth*(0.02)}}>
                { (Rating==0)? null:
                    (Open)? <Text style={{fontSize:iconSize*(0.5), color:'#4d5c6f'}}>∧</Text>
                        : <Text style={{fontSize:iconSize*(0.5), color:'#4d5c6f'}}>∨</Text>
                }
            </TouchableOpacity>
        </View>
    );

    var PlusViewWhenOpened = (
        <View style={{ marginHorizontal: BannerWidth*(1/20)}}>

            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
                <Text style={styles.detailsTitleText}>관람 일자</Text>
                    <TextInputMask
                        style={{height:BannerWidth*(1/10), marginRight:'5%'}}
                        // refInput={ref => { this.input = ref }}
                        keyboardType={'numeric'}
                        placeholder={'YYYY   /   MM   /   DD'}
                        placeholderTextColor={"#9c9c9c"}
                        onChangeText={(formatted, extracted) => {
                            // console.log(formatted) // +1 (123) 456-78-90
                            // console.log(extracted) // 1234567890
                            setDate(extracted==''? null : extracted.slice(0,4)+'.'+ extracted.slice(4,6)+'.'+extracted.slice(6,8)+'.')
                        }}
                        mask={"[0000]   /   [00]   /   [00]"}
                        textAlignVertical={'top'}
                        value={Date}
                    />
            </View>
            <View style={{ width:'100%', height:1, backgroundColor:'#979797', marginVertical:4}}/>

            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
                <Text style={styles.detailsTitleText}>관람 시간</Text>
                <TextInputMask
                    style={{height:BannerWidth*(1/10), marginRight:'5%'}}
                    // refInput={ref => { this.input = ref }}
                    keyboardType={'numeric'}
                    placeholder={'HH   /   MM'}
                    placeholderTextColor={"#9c9c9c"}
                    onChangeText={(formatted, extracted) => {
                        // console.log(formatted) // +1 (123) 456-78-90
                        // console.log(extracted) // 1234567890
                        setTime(extracted==''? null : extracted.slice(0,2)+':'+ extracted.slice(2,4)) // 09시00분
                    }}
                    mask={"[00] 시      [00] 분"}
                    textAlignVertical={'top'}
                    value={Time}
                />
            </View>
            <View style={{ width:'100%', height:1, backgroundColor:'#979797', marginVertical:4}}/>

            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
                <Text style={styles.detailsTitleText}>관람일 날씨</Text>
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'space-between', width:'60%'}}>
                    <TouchableOpacity onPress={()=>{setWeather('☀')}} >
                        {Weather=='☀'?
                            <>
                            <Sunny height={BannerWidth*(1/10)}/>
                            <View style={{ backgroundColor:'#4d5c6f', width: BannerWidth*(1/20), height:3}}/>
                            </>
                            :<UnfocusedSunny height={BannerWidth*(1/10)}/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setWeather('🌥')}}>
                        {Weather=='🌥'?
                            <>
                                <Cloudy height={BannerWidth*(1/10)}/>
                            <View style={{ backgroundColor:'#4d5c6f', width: BannerWidth*(1/20), height:3}}/>
                            </>
                            :<UnfocusedCloudy height={BannerWidth*(1/10)}/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setWeather('🌧')}}>
                        {Weather=='🌧'?
                            <>
                                <Rainy height={BannerWidth*(1/10)}/>
                                <View style={{ backgroundColor:'#4d5c6f', width: BannerWidth*(1/20), height:3}}/>
                            </>
                            :<UnfocusedRainy height={BannerWidth*(1/10)}/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setWeather('⛈')}}>
                        {Weather=='⛈'?
                            <>
                                <Thunder height={BannerWidth*(1/10)}/>
                                <View style={{ backgroundColor:'#4d5c6f', width: BannerWidth*(1/20), height:3}}/>
                            </>
                            :<UnfocusedThunder height={BannerWidth*(1/10)}/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setWeather('❄')}} >
                        {Weather=='❄'?
                            <>
                                <Snowy height={BannerWidth*(1/10)}/>
                                <View style={{ backgroundColor:'#4d5c6f', width: BannerWidth*(1/20), height:3}}/>
                            </>
                            :<UnfocusedSnowy height={BannerWidth*(1/10)}/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setWeather('💨')}} >
                        {Weather=='💨'?
                            <>
                                <Windy height={BannerWidth*(1/10)}/>
                                <View style={{ backgroundColor:'#4d5c6f', width: BannerWidth*(1/20), height:3}}/>
                            </>
                            :<UnfocusedWindy height={BannerWidth*(1/10)}/>}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width:'100%', height:1, backgroundColor:'white', marginVertical:4}}/>
        </View>
    );

    return(
            <View style={{backgroundColor:'#d4d2d2', paddingTop: Platform.OS === 'android' ? 25 : 0}}>
                <View style={{ marginVertical:BannerWidth*(1/30), backgroundColor:'white',
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
                            {Closed}
                            {(Rating!=0 && Open)? PlusViewWhenOpened : null}
                            {/* 이부분 조건문 추후에 잘 정리하기*/}
                            <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 3}}>

                                {/* 원래 버튼 있던 자리 */}

                            </View>
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
        color: "#7f7f7f",
        marginTop: BannerWidth*(0.008),
    },
    detailsTitleText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/28),
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight:  BannerWidth*(1/14),
        letterSpacing: 0,
        color: "#000000"
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
