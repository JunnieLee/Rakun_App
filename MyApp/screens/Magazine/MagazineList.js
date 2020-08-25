import React, {Component, useState} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Platform, StatusBar, Dimensions
} from 'react-native';

import SubMagazineList from '~screens/Magazine/SubMagazineList';


const BannerWidth = Dimensions.get('window').width;

const MagazineList = ({props, navigation}) => {

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true}/>
            <View style = {styles.container}>
                <View style={{height: BannerWidth*(1/10)}}/>

                <ScrollView stickyHeaderIndices={[0]}
                            contentContainerStyle={{flexDirection:'row'}}>
                    <View style={{ width: '27%'}}>
                        <View style={{ marginHorizontal:BannerWidth*(1/25) }}>
                            <Text style={styles.RakunMagazineText}>라쿤</Text>
                            <Text style={styles.RakunMagazineText}>매거진</Text>
                        </View>
                    </View>
                    <View style={{ width: '73%', marginTop:BannerWidth*(1/10)}}>

                        <SubMagazineList navigation={navigation}/>

                    </View>
                </ScrollView>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom:10,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    RakunMagazineText: {
        fontFamily:  Platform.OS === 'android' ?'NotoSansCJKkr-Thin':"AppleSDGothicNeo",
        fontSize: BannerWidth*(1/15), //26,
        fontWeight: "100",
        fontStyle: "normal",
        lineHeight: BannerWidth*(1/11),
        letterSpacing: 0,
        color: "#000000"
    }
});

export default MagazineList;
