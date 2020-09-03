
import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

import { useQuery } from "@apollo/react-hooks";
// import GET_EVENT_DATA from '~DBdata/EventsListView/EventDataWithListView';

import GenreItem from ".././components/Items/GenreItem";

import gql from "graphql-tag";


// props --> image, title, date, rating, likes

// temporary hardcoded data

var ItemImage = [
    'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png',
    'https://user-images.githubusercontent.com/33515577/90023228-73b83280-dcee-11ea-82b1-d325ca688cf3.png',
    'https://user-images.githubusercontent.com/33515577/90023316-90546a80-dcee-11ea-9ba3-491df9cc5f45.png',

    'https://user-images.githubusercontent.com/33515577/89978689-12ba3b80-dca9-11ea-87f2-d8c919104ff8.png',
    'https://user-images.githubusercontent.com/33515577/90023228-73b83280-dcee-11ea-82b1-d325ca688cf3.png',
    'https://user-images.githubusercontent.com/33515577/90023316-90546a80-dcee-11ea-9ba3-491df9cc5f45.png'

];

var ItemTitle = [
    '오페라의 유령',
    '귀환 (그날의 약속)',
    'Horizon of Axis',

    '오페라의 유령',
    '귀환 (그날의 약속)',
    'Horizon of Axis'
];

var ItemDate = [
    '~2020.08.08',
    '~2020.08.08',
    '~2020.08.08',

    '~2020.08.08',
    '~2020.08.08',
    '~2020.08.08'
];

var ItemRating= [
    4.5,
    2,
    3.5,

    4,
    2.5,
    5
];

var ItemLikes= [
    4,
    9,
    2,

    100,
    23,
    0
];

/*
const GET_EVENT_DATA = gql`
  query MyQuery($genreId: Int!) {
      performances(genreId: $genreId) {
        name
        id
        genreId
        startDate
        endDate
        hearts
        expected_ratings
        posterUrl
        total_ratings
        performance_favorites {
          user {
            id
          }
        }
      }
}
`;
*/

const GET_EVENT_DATA = gql`
  query MyQuery {
      performances(limit: 15, where: {genreId: {_eq: 1}}) {
        name
        id
        genreId
        startDate
        endDate
        expected_ratings
        posterUrl
        total_ratings
      }
}
`;
//         performance_favorites {
//           user {
//             id
//           }
//         }

const GenreList = (props) => {

    const { loading, error, data } = useQuery(GET_EVENT_DATA, {
        // variables: { ['genreId']: props.genreId},
        notifyOnNetworkStatusChange: true,
        // pollInterval: 500, - to mimic real-time
    });

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error!{error.message}</Text>;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}>
                {data.performances.map(({ id, posterUrl, name, endDate, total_ratings, expected_ratings, performance_favorites }) => (
                    <GenreItem
                        key = {id}
                        image = {posterUrl}
                        title = {name}
                        date = {'~' + endDate}
                        rating = {total_ratings}
                        E_rating = {expected_ratings}
                        likes = {ItemLikes[0]}
                        // likes = {performance_favorites.length}
                        navigation = {props.navigation}
                    />
                ))
                }
                <View style={{height: 300}}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'yellow'
        //paddingVertical: '4%'
    }
});


export default GenreList;
