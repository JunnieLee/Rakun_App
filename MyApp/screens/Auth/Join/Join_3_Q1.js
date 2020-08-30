import React, { useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView,
    TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions, StatusBar,TextInput,Keyboard} from 'react-native';

import GoBack from '~assets/icons/drawable/goback.svg';

const BannerWidth = Dimensions.get('window').width;

const Join_3_Q1 = ({props, navigation}) => {

    const [Sex, setSex] = useState(null); // M (male) F (female) N (none)

    var Info = [
        {
            text: '남자',
            inputVal: 'M' // (male)
        },
        {
            text: '여자',
            inputVal: 'F' // (female)
        },
        {
            text: '표시안함',
            inputVal: 'N' // (none)
        },
    ];

    return(
        <KeyboardAvoidingView style={{width:'100%', height:'100%', backgroundColor:'white',
            paddingTop: Platform.OS === 'android' ? 25 : 0 }}
                              behavior={Platform.OS == "ios" ? "padding" : "height"}>

            <View style={{flex: 1, justifyContent: "space-between"}}>

                {/* TOP */}
                <View>
                    <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true}/>
                    <View style={{ flexDirection:'row', marginVertical:BannerWidth*(1/30)}}>
                        <View style={{height: BannerWidth*(1/35)}}/>
                    </View>

                    <View style={{height:BannerWidth*(0.05)}}/>
                    <View style={{marginLeft: '8%'}}>
                        {/* CODE GOES HERE*/}
                        <Text style={styles.WelcomeText}>
                            당신에게 어울리는 전시/공연을{'\n'}추천해드립니다. 당신에 대해 알려주세요.
                        </Text>
                    </View>
                </View>

                {/* MIDDLE */}

                <View style={{marginLeft: '8%', marginBottom:'40%'}}>{/*refactor height using marginBottom*/}
                    <Text style={styles.WelcomeText}>   Q. 성별이 뭔가요?</Text>
                    <View style={{backgroundColor: '#888888', width:'100%', height:1, marginVertical:BannerWidth*(0.05)}} />
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginRight: '8%'}}>
                        {/* list of buttons should go in here*/}
                        {Info.map((item)=>{
                            return(
                                <TouchableOpacity
                                    style={{width:'29%', borderColor: "#4d5c6f", borderWidth: 1, height: BannerWidth*(0.12),
                                        justifyContent:'center', alignItems:'center',
                                        backgroundColor: (item.inputVal===Sex)? "#4d5c6f":'white'}}
                                    onPress={()=>{(item.inputVal===Sex)? setSex(null) : setSex(item.inputVal)}}
                                >
                                    <Text style={ (item.inputVal===Sex)? styles.ButtonText: styles.ButtonTextUnfocused }>
                                        {item.text}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>





                {/* BOTTOM */}
                <View>
                    { Sex !== null  ?
                        <TouchableOpacity style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                            alignItems:'center', backgroundColor:"#4d5c6f"}}
                                          onPress={()=>{navigation.push('Q2')}}
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

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    WelcomeText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.045),
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: BannerWidth*(0.077),
        letterSpacing: 0,
        color: "#000000"
    },
    ButtonText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.04),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "white"
    },
    ButtonTextUnfocused:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.04),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4d5c6f"
    },
    subText:{
        fontFamily: "AppleSDGothicNeo",
        fontSize: BannerWidth*(0.033),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#888888",
        marginVertical: BannerWidth*(0.02),
    }
});


export default Join_3_Q1;

