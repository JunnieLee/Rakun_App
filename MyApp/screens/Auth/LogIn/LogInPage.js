import React, { useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, StatusBar} from 'react-native';


const BannerWidth = Dimensions.get('window').width;

const LogInPage = (props) => {
    return(
        <View style={{width:'100%', height:'100%'}}>
            <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true}/>
            <Text> Hello </Text>
        </View>
    );
}

const styles = StyleSheet.create({

});


export default LogInPage;
