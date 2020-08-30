import React, { useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView,
    TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions, StatusBar,TextInput,Keyboard} from 'react-native';

import TextInputMask from 'react-native-text-input-mask';



import GoBack from '~assets/icons/drawable/goback.svg';
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const BannerWidth = Dimensions.get('window').width;

const Join_2_New2 = ({props, navigation}) => {

    const [NickName, setNickName] = useState('');
    const [BirthDay, setBirthDay] = useState('');
    const [ConfirmButtonPressed, setConfirmButtonPressed] = useState(false);

    const [Incorrect, setIncorrect] = useState(false); // 오류 시 빨간색 오류 메세지 띄워주기 위함

    return(
        <KeyboardAvoidingView style={{width:'100%', height:'100%', backgroundColor:'white',
            paddingTop: Platform.OS === 'android' ? 25 : 0 }}
                              behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={{flex: 1, justifyContent: "space-between"}}>

                    {/* TOP */}
                    <View>

                        <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true}/>
                        <View style={{ flexDirection:'row', marginVertical:BannerWidth*(1/30)}}>
                            <TouchableOpacity onPress={()=> navigation.goBack()}
                                              style={{ flexDirection:'row', marginHorizontal:'5%', alignItems:'center'}}>
                                <GoBack/><Text style={styles.NavText}>    회원가입</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{height:BannerWidth*(0.1)}}/>

                        <View style={{marginLeft: '8%'}}>

                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginRight:'6%'}}>
                                <TextInput style={styles.TextInputStyle}
                                           onChangeText={text => setNickName(text)}
                                           placeholder='닉네임'
                                           placeholderTextColor={'#888888'}
                                />
                                <TouchableOpacity onPress={()=>{
                                                                    setConfirmButtonPressed(true);
                                                                    (NickName==='junnie')?
                                                                    setIncorrect(true) : setIncorrect(false) ;}}
                                                                    // 나중엔 유저 DB에서 뒤져서(?) 중복 있나없나 확인해야겠지!!
                                                  style={{ width:'25%', borderWidth:1, borderColor:"#819aa7", borderStyle: "solid",
                                                            justifyContent:'center', alignItems: 'center'}}
                                >
                                    <Text style={styles.ConfirmButtonText}>중복확인</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor: '#888888', width:'100%', height:1}} />

                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginVertical: BannerWidth*(0.02)}}>
                                <Text style={styles.detailsTitleText}> 생년월일</Text>
                                <TextInputMask
                                    style={{height:BannerWidth*(1/10), marginRight:'6%'}}
                                    keyboardType={'numeric'} value={BirthDay}
                                    placeholder={'YYYY    /    MM    /    DD  '} placeholderTextColor={"#9c9c9c"}
                                    onChangeText={(formatted, extracted) => {
                                        // console.log(formatted) // +1 (123) 456-78-90
                                        // console.log(extracted) // 1234567890
                                        setBirthDay(extracted)
                                    }}
                                    mask={"[0000]    /    [00]    /    [00]  "}
                                />
                            </View>

                            <View style={{backgroundColor: '#888888', width:'100%', height:1}} />
                            { ConfirmButtonPressed ?
                                Incorrect?
                                    <Text style={styles.ErrorText}>   닉네임 중복확인을 해주세요.</Text>
                                    : <Text style={styles.RightText}>   사용하실 수 있는 닉네임입니다.</Text>
                                : null
                            }

                        </View>

                    </View>


                    {/* BOTTOM */}
                    <View>

                        {NickName !== ''&& BirthDay !=='' && ConfirmButtonPressed && !Incorrect ?
                            <TouchableOpacity style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                                alignItems:'center', backgroundColor:"#4d5c6f"}}
                                              onPress={()=>{navigation.push('Q1')}}
                            >
                                <Text style={styles.ButtonText}>회원가입</Text>
                            </TouchableOpacity>
                            :
                            <View style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                                alignItems:'center', backgroundColor:"#9c9c9c"}}>
                                <Text style={styles.ButtonText}>회원가입</Text>
                            </View>
                        }
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    NavText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.04),
        lineHeight: BannerWidth*(0.1),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "black"
    },
    ButtonText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.04),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "white"
    },
    ConfirmButtonText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.033),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#819aa7",
        marginVertical: BannerWidth*(0.01),
    },
    subText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.033),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#888888",
        marginVertical: BannerWidth*(0.02),
    },
    ErrorText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.031),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#f77070",
        marginVertical: BannerWidth*(0.02),
    },
    RightText : {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.031),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4d5c6f",
        marginVertical: BannerWidth*(0.02),
    },
    TextInputStyle: {
        height: BannerWidth*(1/9),
        // borderBottomColor: "#7f7f7f",
        // borderBottomWidth: 0.7,
        // marginBottom:'5%'
    },
    detailsTitleText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/29),
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight:  BannerWidth*(1/14),
        letterSpacing: 0,
        color: "#000000"
    },
});


export default Join_2_New2;

