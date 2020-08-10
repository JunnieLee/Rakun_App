import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

const MainHeader =  props => {
    return (
      <View style ={styles.header}>
          <Text style ={styles.headerTitle}>{props.title}</Text>
          <TouchableOpacity style={styles.Search}>
              <Image
                  source={require('../assets/icons/search.png')}
                  onPress={ ()=>{} }
              />
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    headerTitle: {
        width: '90%',
        color: 'black',
        fontSize: 26,
        height: 36,
        paddingLeft: 15,
        fontFamily: "NotoSansCJKkr",
        fontWeight: "100",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        alignItems: 'flex-start'
    },
    Search: {
        width: 22,
        height: 18,
        alignItems: 'flex-end'
    }
});

export default MainHeader;
