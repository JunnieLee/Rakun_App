import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    Modal,
    SafeAreaView, ScrollView, Alert
} from 'react-native';

import My_EditProfilePage from './My_EditProfilePage';

import auth from '@react-native-firebase/auth';

const BannerWidth = Dimensions.get('window').width;

const profileImage = 'https://user-images.githubusercontent.com/33515577/90604014-26304e00-e237-11ea-8aa8-304f67730bc8.png';
var nickname = '쭌쭌';

const MY_BasicPage =  ({props, navigation}) => {

    const [isVisible, setisVisible] = useState(false);
    const openEditView = () => setisVisible(isVisible => isVisible = (!isVisible));

    var top = (
        <View style={{flexDirection:'row'}}>

            <View style={styles.textContainer}>
                <Text style={styles.WelcomeText}>문화를 즐기시는</Text>
                <Text style={styles.WelcomeText}>{nickname}님!</Text>
            </View>

            <View style={styles.profileContainer}>
                <Image source={{uri:profileImage}}
                       style={{ width: BannerWidth*(1/5), height: BannerWidth*(1/5), borderRadius: 150/2}}/>
                <TouchableOpacity onPress={openEditView}>
                    <Image
                        source={require('../../assets/icons/edit_profile.png')} // ../.././assets/icons/close.png
                        style={styles.editButton}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    var middle = (
        <View style={{ marginVertical: BannerWidth*(1/10)}} >
            <View style={styles.outerLine}/>

            <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.menuText}> 메인화면 수정 </Text>
            </TouchableOpacity>
            <View style={styles.innerLine}/>

            <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.menuText}> 공지사항 </Text>
            </TouchableOpacity>
            <View style={styles.innerLine}/>

            <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.menuText}> 카카오톡 문의 </Text>
            </TouchableOpacity>
            <View style={styles.innerLine}/>

            <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.menuText}> 피드백 남기기 </Text>
            </TouchableOpacity>
            <View style={styles.outerLine}/>
        </View>
    );

    var bottom =(
        <View style={{ alignItems: 'center', bottom:'3%' }}>
            <TouchableOpacity onPress={()=>{
                auth()
                    .signOut()
                    .then(() => Alert.alert('User signed out!'));
                navigation.navigate('Initial');
            }}>
                <Text style={styles.LogoutText}>로그아웃</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ width: '100%', height:'100%', backgroundColor: 'white'}}>
        <View style={styles.Container}>
            {top}
            {middle}
            {bottom}
            <Modal animationType = {"slide"} transparent = {false} visible = {isVisible} statusBarTranslucent={true}>
                {/*All views of Modal*/}
                <SafeAreaView style={{ flex: 1 }}>
                    <View style = {styles.modal}>
                        <TouchableOpacity onPress={ openEditView }>
                            <Image
                                source={require('../../assets/icons/close.png')}
                                style={styles.closeTab}
                            />
                        </TouchableOpacity>
                        {/* Show Edit Page */}


                            <My_EditProfilePage
                                profileImage = {profileImage}
                                nickname={nickname}
                            />


                    </View>
                </SafeAreaView>
            </Modal>
        </View>
        </View>
    );
}




const styles = StyleSheet.create({
    Container : {
        backgroundColor:'white',
        marginVertical: BannerWidth*(0.2),//50,
        width: BannerWidth*(0.9),
        marginHorizontal: BannerWidth*(0.1)*(0.5),
        paddingTop: Platform.OS === 'android' ? 25 : 0
        // alignItems: 'center'
    },
    WelcomeText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/15),// 28,
        fontWeight: "100",
        fontStyle: "normal",
        // lineHeight: 36,
        letterSpacing: 0,
        color: "#000000"
    },
    editButton :{
        width: BannerWidth*(1/5),
        resizeMode:'contain',
        marginVertical: '2%'
        // height: BannerWidth*(1/5)
    },
    textContainer:{
        width:'65%'
    },
    profileContainer: {
        width:'35%',
        marginHorizontal: '5%',
        alignItems:'center'
    },
    outerLine: {
        width: BannerWidth*(0.9),
        height: '2%',
        backgroundColor:'#4d5c6f'
    },
    menuText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/28),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginVertical: BannerWidth*(1/25)
    },
    innerLine : {
        width: BannerWidth*(0.9),
        height: '0.5%',
        backgroundColor:'#4d5c6f',
    },
    LogoutText: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(1/30),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7d7d7d"
    },
    modal: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: 'white',
        marginLeft: '5%',
        marginTop: '10%'
    },
    closeTab : {

        // width: 40,
        // height: 44,
        width: BannerWidth*(1/10),
        height: BannerWidth*(1/10),
        flexDirection: 'row',
        alignItems: 'flex-start',
        // marginTop:30,
        // paddingLeft:30
    },
});


export default MY_BasicPage;
