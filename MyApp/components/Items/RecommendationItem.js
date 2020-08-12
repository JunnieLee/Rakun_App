import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecommendationItem = (props) => {
    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                       source={{ uri: 'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png' }}
                     />
                {/* source={{ uri: props.image }}*/}
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title} 오페라의 유령 </Text>
                {/* 작품 제목 옆에 하트 넣기*/}
                <Text style={styles.date}>{props.date} 2020.03.14~2020.08.08 </Text>
            </View>
                {/* 별점 넣기*/}
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 330,
        margin: 20
    },
    imageContainer: {
        width: '100%',
        height: '75%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'contain'
    },
    details: {
        alignItems: 'flex-start',
        height: '25%',
        padding: 10
    },
    title: {
        fontFamily: "AppleSDGothicNeo",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginVertical: 4
    },
    date: {
        width: 149,
        height: 17,
        fontFamily: "AppleSDGothicNeo",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f7f7f"
    }
});

export default RecommendationItem;
