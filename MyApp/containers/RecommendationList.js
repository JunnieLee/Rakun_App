/*This is an Example of React Native Add Items to ScrollView using Loop*/
import React, { Component } from 'react';
//import react in our project

import { View, ScrollView, StyleSheet, Text,} from 'react-native';
//import all the components we needed

import RecommendationItem from '.././components/Items/RecommendationItem';

export default class RecommendationList extends Component {
    constructor() {
        super();
        //Array of Item to add
        this.items = [
            'Goa',
            'Gujrat',
            'Madhya Pradesh',
            'Assam',
            'Gujrat',
            'Karnataka',
            'Jharkhand',
            'Himachal Pradesh',
        ];
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <RecommendationItem />
                    <RecommendationItem />
                    {/*Loop of JS which is like foreach loop*/}
                    {this.items.map((item, key) => (
                        //key is the index of the array
                        //item is the single item of the array
                        <View key={key} style={styles.item}>
                            <Text style={styles.text}>{key}. {item}</Text>
                            <View style={styles.separator} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    separator: {
        height: 1,
        backgroundColor: '#707080',
        width: '100%',
    },

    text: {
        fontSize: 16,
        color: '#606070',
        padding: 10,
    },
});
