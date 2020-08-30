import React, { useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView,
    TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions, StatusBar,TextInput,Keyboard} from 'react-native';

import GoBack from '~assets/icons/drawable/goback.svg';

const BannerWidth = Dimensions.get('window').width;

const Join_4_Q2 = ({props, navigation}) => {

    const [withWhom, setwithWhom] = useState([]); // M (male) F (female) N (none)

    const AddOrDeleteElement = (element) => {
        let newArray = [...withWhom];
        const idx = newArray.indexOf(element);

        if (idx > -1) {newArray.splice(idx, 1);}
        else {newArray.push(element);}

        setwithWhom(newArray);
    }

    var Info = [
        {
            text: '혼자',
            inputVal: 'AL' // (Alone)
        },
        {
            text: '연인',
            inputVal: 'LV' // (Lover)
        },
        {
            text: '친구',
            inputVal: 'FR' // (Friends)
        },
        {
            text: '가족',
            inputVal: 'FA' // (Family)
        },
        {
            text: '지인',
            inputVal: 'AC' // (Acquaintance)
        },
        {
            text: '비즈니스',
            inputVal: 'BS' // (Business)
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

                        <TouchableOpacity onPress={()=> navigation.goBack()}
                                          style={{ flexDirection:'row', marginHorizontal:'5%', alignItems:'center'}}>
                            <GoBack/>
                        </TouchableOpacity>

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
                    <Text style={styles.WelcomeText}>   보통 누구랑 같이 가나요?</Text>
                    <Text style={styles.subText}>       *중복 선택 가능</Text>
                    <View style={{backgroundColor: '#888888', width:'100%', height:1, marginVertical:BannerWidth*(0.05)}} />
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginRight: '8%', flexWrap: 'wrap'}}>
                        {/* list of buttons should go in here*/}
                        {Info.map((item)=>{
                            return(
                                <TouchableOpacity
                                    style={{width:'29%', borderColor: "#4d5c6f", borderWidth: 1, height: BannerWidth*(0.12),
                                        justifyContent:'center', alignItems:'center', marginBottom: BannerWidth*(0.05),
                                        backgroundColor: (withWhom.indexOf(item.inputVal)>-1)? "#4d5c6f":'white'}}
                                    onPress={()=>{AddOrDeleteElement(item.inputVal)}}
                                >
                                    <Text style={(withWhom.indexOf(item.inputVal)>-1)? styles.ButtonText: styles.ButtonTextUnfocused }>
                                        {item.text}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>


                {/* BOTTOM */}
                <View>
                    { withWhom.length !== 0  ?
                        <TouchableOpacity style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                            alignItems:'center', backgroundColor:"#4d5c6f"}}
                                          onPress={()=>{navigation.push('Q3')}}
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
        // marginVertical: BannerWidth*(0.02),
    }
});


export default Join_4_Q2;


