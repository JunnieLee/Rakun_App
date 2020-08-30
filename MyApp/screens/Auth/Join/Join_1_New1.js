import React, { useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView,
    TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions, StatusBar,TextInput,Keyboard} from 'react-native';

import GoBack from '~assets/icons/drawable/goback.svg';

const BannerWidth = Dimensions.get('window').width;

const Join_1_New1 = ({props, navigation}) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const [PasswordFocused, setPasswordFocused] = useState(false);
    const [ConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    const [RightPasswordType, setRightPasswordType] = useState(true); // 비밀번호 조건 관련 메세지 띄워주기 위함

    const [ConsentFirst, setConsentFirst] = useState(false);
    const [ConsentSecond, setConsentSecond] = useState(false);
    const [ConsentThird, setConsentThird] = useState(false);



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
                                       onChangeText={text => setEmail(text)}
                                       placeholder='이메일'
                                       placeholderTextColor={'#888888'}
                            />
                            <TextInput style={styles.TextInputStyle}
                                       onFocus={()=>{setPasswordFocused(true)}}
                                       onBlur={()=>{setPasswordFocused(false)}}
                                       onChangeText={(text) => {
                                                                    if (
                                                                        (text.length>=8) && // over 8 words
                                                                        (text.search(/\d/) !== -1) && // at least one number
                                                                        (text.search(/[a-zA-Z]/) !== -1) && //  at least one letter
                                                                        (text.search(/[!@#$%^&*]/) !== -1) &&//  at least one special character
                                                                        (text.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) === -1)
                                                                            // weird char not included
                                                                    ) { setRightPasswordType(true); setPassword(text);}
                                                                    else {(text==='')? setRightPasswordType(true): setRightPasswordType(false)}
                                                                }}
                                       secureTextEntry={true}
                                       placeholder='비밀번호'
                                       placeholderTextColor={'#888888'}
                            />
                            <TextInput style={styles.TextInputStyle}
                                       onFocus={()=>{setConfirmPasswordFocused(true)}}
                                       onBlur={()=>{setConfirmPasswordFocused(false)}}
                                       onChangeText={(text) => {setConfirmPassword(text)}}
                                       secureTextEntry={true}
                                       placeholder='비밀번호 확인'
                                       placeholderTextColor={'#888888'}
                            />
                            {
                                PasswordFocused?
                                    <Text style={{
                                        fontFamily: "AppleSDGothicNeo",
                                        fontSize: BannerWidth*(0.031),
                                        fontWeight: "normal",
                                        fontStyle: "normal",
                                        letterSpacing: 0,
                                        lineHeight: BannerWidth*(0.05),
                                        color: (RightPasswordType)?"#4d5c6f":"#f77070",
                                        marginVertical: BannerWidth*(0.02),
                                        marginHorizontal: BannerWidth*(0.03),
                                    }}>
                                        비밀번호는 문자 숫자 특수문자의 조합으로 8자 이상으로 {"\n"}입력해주세요.
                                    </Text>
                                    : null
                            }
                            {
                                ConfirmPasswordFocused?
                                    !(Password===ConfirmPassword)?
                                        <Text style={styles.ErrorText}>    비밀번호가 일치하지 않습니다.</Text>
                                            : null
                                    : null
                            }
                        </View>
                    </View>


                    {/* BOTTOM */}
                    <View>

                        <View style={{ alignContent:'flex-end',
                            marginLeft: BannerWidth*(0.05), marginBottom: BannerWidth*(0.05)}}>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.circle}
                                    onPress={() => {setConsentFirst(!ConsentFirst);
                                        !ConsentFirst? setConsentSecond(true):setConsentSecond(false);
                                        !ConsentFirst? setConsentThird(true):setConsentThird(false);}} // we set our value state to key
                                >
                                    { (ConsentFirst || (ConsentSecond&&ConsentThird)) && (<View style={styles.checkedCircle} />) }
                                </TouchableOpacity>
                                <Text style={styles.subText}>모든 약관에 동의합니다.</Text>
                            </View>

                            <View style={{backgroundColor:'#9c9c9c',height:1, marginVertical: BannerWidth*(0.03), width:'100%'}}/>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.circle}
                                    onPress={() => {setConsentSecond(!ConsentSecond)}}
                                >
                                    { ConsentSecond && (<View style={styles.checkedCircle} />) }
                                </TouchableOpacity>
                                <Text style={styles.subText}>
                                    <Text style={{ textDecorationLine: 'underline'}} onPress={()=>{ /* 개인정보 취급 방침 관련 정보 링크 */ }}>
                                        개인정보취급 방침
                                    </Text> 수집에 동의하시나요?
                                </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.circle}
                                    onPress={() => {setConsentThird(!ConsentThird)}}
                                >
                                    { ConsentThird && (<View style={styles.checkedCircle} />) }
                                </TouchableOpacity>
                                <Text style={styles.subText}>
                                    <Text style={{ textDecorationLine: 'underline'}} onPress={()=>{ /* 회원 약관 관련 정보 링크 */ }}>
                                    회원 약관
                                    </Text> 동의하시나요?
                                </Text>
                            </View>
                        </View>


                        {Email!=='' && Password!=='' && ConfirmPassword!=='' && ConsentFirst &&
                            RightPasswordType && Password===ConfirmPassword ?
                            <TouchableOpacity style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                                                        alignItems:'center', backgroundColor:"#4d5c6f"}}
                                              onPress={()=>{navigation.push('New2')}}
                            >
                                <Text style={styles.ButtonText}>다음</Text>
                            </TouchableOpacity>
                            :
                            <View style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                                alignItems:'center', backgroundColor:"#9c9c9c"}}>
                                <Text style={styles.ButtonText}>다음</Text>
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
        color: "#f77070",
        marginVertical: BannerWidth*(0.02),
    },
    TextInputStyle: {
        height: BannerWidth*(1/9),
        borderBottomColor: "#7f7f7f",
        borderBottomWidth: 0.7,
        // marginBottom:'5%'
    },
    buttonContainer: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 2,
    },
    circle: {
        marginLeft: BannerWidth*(0.05),
        height: BannerWidth*(0.04),
        width: BannerWidth*(0.04),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: BannerWidth*(0.02)
    },
    checkedCircle: {
        width: BannerWidth*(0.02),
        height: BannerWidth*(0.02),
        borderRadius: 7,
        backgroundColor: '#4d5c6f',
    },
});


export default Join_1_New1;

