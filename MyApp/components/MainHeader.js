import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MainHeader =  props => {
    return (
      <View style ={styles.header}>
          <Text style ={styles.headerTitle}>{props.title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'white',
        alignItems: 'flex-start'
    },
    headerTitle: {
        width: '80%',
        color: 'black',
        fontSize: 26,
        height: 36,
        paddingLeft: 15,
        fontFamily: "NotoSansCJKkr",
        fontWeight: "100",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0
    }
});

export default MainHeader;
