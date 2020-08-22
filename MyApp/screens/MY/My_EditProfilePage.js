import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput,
    findNodeHandle,
    // ReactNative,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// import PasswordInputText from 'react-native-hide-show-password-input';


const BannerWidth = Dimensions.get('window').width;

// temporary hardcoded data
var gender = '여';
var birthday = '1996 / 06 / 12';


const My_EditProfilePage =  props => {

    const [nickname, onChangeText_1] = React.useState(props.nickname);
    const [newPassword, onChangeText_5] = React.useState('');
    const [newPasswordconfirmed, onChangeText_6] = React.useState('');


    var confirmNewPassword = (
        <View>
            <Text style={styles.menuTitleText}> 비밀번호 확인 </Text>
            <TextInput
                style={styles.TextInputStyle}
                onChangeText={text => onChangeText_6(text)}
                secureTextEntry={true}
                placeholder='비밀번호 확인'
            />
        </View>
    );


    return (
        <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
                                  //style={{flex:1}}
                                  contentContainerStyle={{ flexGrow: 1 }}
                                  showsVerticalScrollIndicator={false}
                                  enableOnAndroid={true}
                                  // extraScrollHeight={BannerWidth*(1/5)}
                                 >

        <View style={styles.Container}>

            <View style={{ width: '10%'}} />

            <View style={{ width: '95%'}}>

                {/* 프로필 사진 부분 */}
                <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                    <View style={styles.profileContainer}>
                        <Image source={{uri:props.profileImage}}
                               style={{ width: BannerWidth*(1/5), height: BannerWidth*(1/5), borderRadius: 150/2}}/>
                        <TouchableOpacity onPress={()=>{}}>
                            <Text style={styles.changePicText}>프로필 사진 변경</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Text Input 부분*/}


                <View>
                    <Text style={styles.menuTitleText}> 닉네임 </Text>
                    <TextInput
                        style={styles.TextInputStyle}
                        value={nickname}
                        onChangeText={text => onChangeText_1(text)}
                    />

                    <Text style={styles.menuTitleText}> 성별 </Text>
                    <TextInput
                        style={styles.TextInputStyle}
                        value={gender}
                        editable={false}
                    />

                    <Text style={styles.menuTitleText}> 생년월일 </Text>
                    <TextInput
                        style={styles.TextInputStyle}
                        value={birthday}
                        editable={false}
                    />

                        <Text style={styles.menuTitleText}> 이메일 </Text>
                        <TextInput
                            style={styles.TextInputStyle}
                        />

                        <Text style={styles.menuTitleText}> 새 비밀번호 </Text>
                        <TextInput
                            style={styles.TextInputStyle}
                            onChangeText={text => onChangeText_5(text)}
                            secureTextEntry={true}
                            // defaultValue={newPassword}
                            // clearTextOnFocus={true}
                            // keyboardType ={'numeric'}
                        />
                        {newPassword==''? null: confirmNewPassword}
                </View>

                {/* 저장버튼 */}
                <TouchableOpacity
                    style={{ width: '95%', height:'5%', backgroundColor:'#4d5c6f', marginTop: '20%', justifyContent:'center'}}
                    onPress={()=>{}}>
                    <Text style={styles.saveButtonText}>저장하기</Text>
                </TouchableOpacity>
                <View style={{ width: '100%', height:25, backgroundColor:'white'}}/>
            </View>
        </View>
        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    Container : {
        // marginVertical: BannerWidth*(0.2),//50,
        flexDirection: 'row',
        marginHorizontal: BannerWidth*(0.1)*(0.5)
        // alignItems: 'center'
    },
    changePicText:{
        textDecorationLine:'underline',
        // textDecorationStyle:'underline',
        // width: 93,
        // height: 17,
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/30),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7d7d7d",
        marginVertical: '8%'
    },
    profileContainer: {
        alignItems:'center',
        marginVertical: '5%',
        width:'30%',
        marginHorizontal: '5%'
    },
    menuTitleText: {
        // width: 55,
        // height: 25,
        height: BannerWidth*(1/20),
        fontFamily: "AppleSDGothicNeo",
        // fontSize: 21,
        fontSize: BannerWidth*(1/23),
        fontWeight: "100",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    TextInputStyle: {
        height: BannerWidth*(1/9),
        borderBottomColor: '#a98c66',
        borderBottomWidth: 1,
        marginBottom:'5%'
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
    }
});

export default My_EditProfilePage;
