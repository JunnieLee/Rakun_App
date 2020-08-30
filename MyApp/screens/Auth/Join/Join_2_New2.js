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
                            <TextInput style={styles.TextInputStyle}
                                       onFocus={()=>{setIncorrect(false)}}
                                       onChangeText={text => setNickName(text)}
                                       placeholder='닉네입'
                                       placeholderTextColor={'#888888'}
                            />
                            <TextInput style={styles.TextInputStyle}
                                       onFocus={()=>{setIncorrect(false)}}
                                       onChangeText={text => setBirthDay(text)}
                                       secureTextEntry={true}
                                       placeholder='비밀번호'
                                       placeholderTextColor={'#888888'}
                            />

                            {Incorrect?
                                <Text style={styles.ErrorText}>    닉네임 중복확인을 해주세요.</Text>
                                : null}

                        </View>

                    </View>


                    {/* BOTTOM */}
                    <View>

                        {Email!=''&&Password!=''&&ConfirmPassword!=''&&ConsentFirst?
                            <TouchableOpacity style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                                alignItems:'center', backgroundColor:"#4d5c6f"}}
                                              onPress={()=>{(Password===ConfirmPassword)? navigation.push('New2'):setIncorrect(true)}}
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
        color: "#f77070"
    },
    TextInputStyle: {
        height: BannerWidth*(1/9),
        borderBottomColor: "#7f7f7f",
        borderBottomWidth: 0.7,
        // marginBottom:'5%'
    },
});


export default Join_2_New2;

