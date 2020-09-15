import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, StatusBar} from 'react-native';

import RakunLogo from '~assets/icons/drawable/rakunlogo';

// import firebase from 'react-native-firebase';
import auth from '@react-native-firebase/auth';

const BannerWidth = Dimensions.get('window').width;

const InitialEntryPage = ({props, navigation}) => {

    //-------- 일단은 comment out 함 ---------//
    /*
    useEffect(() => {
        auth().onAuthStateChanged(user => {
            navigation.navigate(user ? 'Main' : 'Initial')
        })
    });
    */

    return(
      <View style={{width:'100%', height:'100%'}}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true}/>
          <View style={{ backgroundColor:'#4d5c6f', justifyContent: 'center', alignItems:"center", width:'100%', height:'85%'}}>
                <RakunLogo width={BannerWidth*(0.5)}/>
                <View style={{height: '10%'}}/>
          </View>
          <View style={{justifyContent:'space-between', alignItems: "center", flexDirection:'row', height:'15%'}}>
                    <View/>

                    <TouchableOpacity onPress={()=>{navigation.push('Join')}}>
                        <Text style={styles.JoinAndLookAroundText}> 회원가입 </Text>
                    </TouchableOpacity>

                    <Text style={styles.JoinAndLookAroundText}> | </Text>

                    <TouchableOpacity onPress={()=>{navigation.push('LogIn')}}>
                        <Text style={styles.LoginText}> 로그인 </Text>
                    </TouchableOpacity>

                    <Text style={styles.JoinAndLookAroundText}> | </Text>

                    <TouchableOpacity onPress={()=>{navigation.push('Main')}}>
                    <Text style={styles.JoinAndLookAroundText}> 둘러보기 </Text>
                    </TouchableOpacity>

                    <View/>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    LoginText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.04),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    JoinAndLookAroundText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.04),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f7f7f"
    }
});


export default InitialEntryPage;
