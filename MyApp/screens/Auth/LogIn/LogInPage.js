import React, { useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert,
    TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions, StatusBar,TextInput,Keyboard} from 'react-native';
import { HideWithKeyboard, ShowWithKeyboard } from 'react-native-hide-with-keyboard';

import GoBack from '~assets/icons/drawable/goback.svg';
import DownIcon from '~assets/icons/drawable/down.svg';

// import firebase from 'react-native-firebase';
import auth from '@react-native-firebase/auth';

const BannerWidth = Dimensions.get('window').width;

const LogInPage = ({props, navigation}) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [Incorrect, setIncorrect] = useState(false); // 이메일, 비밀번호 오류 시 빨간색 오류 메세지 띄워주기 위함

    const [errorMessage, seterrorMessage] = useState(null);

    const handleLogIn = () => {

            Alert.alert("handleLogIn function invoked!");

            auth()
            .signInWithEmailAndPassword(Email, Password)
            .then(() => {
                Alert.alert("Successfully Logged In!");
                navigation.navigate('Main');
            })
            .catch(error => Alert.alert(
                "LogIn Error!",
                error.message,
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    }
                ],
                { cancelable: false }
            ) ); //seterrorMessage({ errorMessage: error.message }))
    }


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
                            <GoBack/><Text style={styles.NavText}>    로그인</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{height:BannerWidth*(0.1)}}/>

                    <View style={{marginLeft: '8%'}}>
                        <TextInput style={styles.TextInputStyle}
                                   onFocus={()=>{setIncorrect(false)}}
                                   onChangeText={text => setEmail(text)}
                                   placeholder='이메일'
                                   placeholderTextColor={'#888888'}
                        />
                        <TextInput style={styles.TextInputStyle}
                                   onFocus={()=>{setIncorrect(false)}}
                                   onChangeText={text => setPassword(text)}
                                   secureTextEntry={true}
                                   placeholder='비밀번호'
                                   placeholderTextColor={'#888888'}
                        />
                        {Incorrect?
                            <Text style={styles.ErrorText}>    이메일 또는 비밀번호를 확인 후 다시 로그인해주세요.</Text>
                            : null}

                    </View>

                </View>


                {/* BOTTOM */}
            <View>

                <HideWithKeyboard>
                <View style={{ width: '35%', alignContent:'flex-end',
                                marginHorizontal: BannerWidth*(0.1), marginBottom: BannerWidth*(0.05)}}>
                    <TouchableOpacity onPress={()=>{ }}>
                        <Text style={styles.subText}>아이디 / 비밀번호 찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push('Join')}}>
                        <Text style={styles.subText}>회원가입</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={styles.subText}>둘러보기</Text>
                    </TouchableOpacity>
                </View>
                </HideWithKeyboard>


                <ShowWithKeyboard>
                    <View style={{ justifyContent:'center', alignItems:'center', marginVertical: BannerWidth*(0.03)}}>
                        <DownIcon width={BannerWidth*(0.06)} height={BannerWidth*(0.05)}/>
                    </View>
                </ShowWithKeyboard>
                {Email!=''&&Password!=''?
                    <TouchableOpacity style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                                                alignItems:'center', backgroundColor:"#4d5c6f"}}
                                      onPress={()=>{handleLogIn()}}
                    >
                        <Text style={styles.ButtonText}>로그인</Text>
                    </TouchableOpacity>
                    :
                    <View style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                        alignItems:'center', backgroundColor:"#9c9c9c"}}>
                        <Text style={styles.ButtonText}>로그인</Text>
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
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        lineHeight: BannerWidth*(0.1),
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
        marginVertical: BannerWidth*(0.015),
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
});


export default LogInPage;
