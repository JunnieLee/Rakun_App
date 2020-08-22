// carousel 찾아서 구현하기
import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions, Animated } from 'react-native';

import { LogBox } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

const images = [
    'https://user-images.githubusercontent.com/33515577/89800075-3bd3b280-db69-11ea-81f0-0edfff61f374.png',
    'https://user-images.githubusercontent.com/33515577/89800094-42fac080-db69-11ea-82f9-abe84946febe.png',
    'https://user-images.githubusercontent.com/33515577/89800140-5148dc80-db69-11ea-93c0-137b729c2b89.png'
];
// 내가 임의로 올려놓은 이미지들

LogBox.ignoreAllLogs();

export default class TopBanner extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth , height: BannerHeight }} source={{ uri: image }} />
                {/*
                <Image style={{ width: BannerWidth , height: BannerHeight, resizeMode:'contain' }} source={{ uri: image }} />
                */}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={3000}
                    loop
                    index={0}
                    pageSize= {BannerWidth}
                    itemHeight={BannerHeight}
                    itemWidth={BannerWidth}
                    useNativeDriver={true}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});

