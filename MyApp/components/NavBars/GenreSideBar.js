import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const GenreSideBar =  props => {

    const [TextStyle, setTextStyle] = useState(styles.GenreTextPlain);
    const onPress = () => setTextStyle(TextStyle =>
                                        TextStyle == styles.GenreTextPlain?
                                            styles.GenreTextFocused : styles.GenreTextPlain);

    var MenuItems_name = ['뮤지컬', '연극', '전시', '박물관', '무용', '오페라', '오케스트라'];
    var MenuItems_activated= [1,0,0,0,0,0,0];
    var MenuItems = [];


    for(let i = 0; i < MenuItems_name.length; i++){
        MenuItems.push(
            <View key = {i}>
                <TouchableOpacity style={styles.MenuItem} onPress={onPress}>
                    <Text style={styles.GenreTextPlain}>
                        {MenuItems_name[i]}
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <View style={styles.LeftMenu}>
            {MenuItems}
        </View>
    );
}

const styles = StyleSheet.create({
    LeftMenu: {
        width:100,
        marginLeft:20,
        alignItems: 'flex-start'
    },
    MenuItem: {
        marginBottom:20
    },
    GenreTextPlain: {
        height: 22,
        fontFamily: "NotoSansCJKkr",
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#8e8e8e",
    },
    GenreTextFocused: {
        width: 34,
        height: 27,
        fontFamily: "NotoSansCJKkr",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        borderBottomColor: '#4d5c6f',
    }
});

export default GenreSideBar;
