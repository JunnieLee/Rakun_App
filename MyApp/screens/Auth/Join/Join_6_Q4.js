import React, { useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Dimensions, StatusBar} from 'react-native';

import GoBack from '~assets/icons/drawable/goback.svg';
import Progress4 from '~assets/icons/drawable/progress_4.svg';

const BannerWidth = Dimensions.get('window').width;

const Join_6_Q4 = ({props, navigation}) => {

    const [Keywords, setKeywords] = useState([]); // M (male) F (female) N (none)

    const AddOrDeleteElement = (element) => {
        let newArray = [...Keywords];
        const idx = newArray.indexOf(element);

        if (idx > -1) {newArray.splice(idx, 1);}
        else {newArray.push(element);}

        setKeywords(newArray);
    }

    var Info = [
        {
            text: '고급스러움',
            inputVal: 'CL' // (Classy)
        },
        {
            text: '역사',
            inputVal: 'HS' // (History)
        },
        {
            text: '교육',
            inputVal: 'ED' // (Education)
        },
        {
            text: '어두운',
            inputVal: 'DK' // (Dark)
        },
        {
            text: '밝은',
            inputVal: 'CF' // (Cheerful)
        },
        {
            text: '즐기는',
            inputVal: 'EJ' // (Enjoyable)
        },
        {
            text: '진지한',
            inputVal: 'SR' // (Serious)
        },
        {
            text: '코믹',
            inputVal: 'OC' // (Comic)
        },
        {
            text: '로맨스',
            inputVal: 'RM' // (Romance)
        },
        {
            text: '잔인한',
            inputVal: 'CR' // (Cruel)
        },
        {
            text: '재난',
            inputVal: 'DS' // (Disaster)
        },
        {
            text: '무거운',
            inputVal: 'OPR' // (Oppressive)
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

                    <View style={{marginLeft: '8%'}}>
                        {/* CODE GOES HERE*/}
                        <Text style={styles.WelcomeText}>
                            당신에게 어울리는 전시/공연을{'\n'}추천해드립니다. 당신에 대해 알려주세요.
                        </Text>
                    </View>
                </View>

                {/* MIDDLE */}

                <View style={{marginLeft: '8%', marginBottom:'3%'}}>{/*refactor height using marginBottom*/}
                    <Progress4/>
                    <Text style={styles.WelcomeText}>좋아하는 키워드를 선택해주세요.</Text>
                    <Text style={styles.subText}>  *중복 선택 가능</Text>
                    <View style={{backgroundColor: '#888888', width:'100%', height:1, marginVertical:BannerWidth*(0.05)}} />
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginRight: '8%', flexWrap: 'wrap'}}>
                        {/* list of buttons should go in here*/}
                        {Info.map((item)=>{
                            return(
                                <TouchableOpacity
                                    style={{width:'29%', borderColor: "#4d5c6f", borderWidth: 1, height: BannerWidth*(0.12),
                                        justifyContent:'center', alignItems:'center', marginBottom: BannerWidth*(0.05),
                                        backgroundColor: (Keywords.indexOf(item.inputVal)>-1)? "#4d5c6f":'white'}}
                                    onPress={()=>{AddOrDeleteElement(item.inputVal)}}
                                >
                                    <Text style={(Keywords.indexOf(item.inputVal)>-1)? styles.ButtonText: styles.ButtonTextUnfocused }>
                                        {item.text}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>


                {/* BOTTOM */}
                <View>
                    { Keywords.length !== 0  ?
                        <TouchableOpacity style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                            alignItems:'center', backgroundColor:"#4d5c6f"}}
                                          onPress={()=>{navigation.navigate('Main')}}
                        >
                            <Text style={styles.ButtonText}>취향선택 완료</Text>
                        </TouchableOpacity>
                        :
                        <View style={{ width:'100%', height: BannerWidth*(0.13), justifyContent:'center',
                            alignItems:'center', backgroundColor:"#9c9c9c"}}>
                            <Text style={styles.ButtonText}>취향선택 완료</Text>
                        </View>
                    }
                </View>

            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    WelcomeText:{
        marginTop: BannerWidth*(0.04),
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


export default Join_6_Q4;

