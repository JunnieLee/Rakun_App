
import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

import { useQuery } from "@apollo/react-hooks";
// import GET_EVENT_DATA from '~DBdata/EventsListView/EventDataWithListView';

import GenreItem from ".././components/Items/GenreItem";

import gql from "graphql-tag";


// props --> image, title, date, rating, likes

// temporary hardcoded data

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


// 1- 연극, 2-뮤지컬, 3-무용, 4- 오케스트라 ?, 5- 오페라...? , 6- 판소리...? 8...
const GET_EVENT_DATA = gql`
  query MyQuery {
      performances(limit: 20, where: {genreId: {_eq: 2}}) { 
        name
        id
        genreId
        startDate
        endDate
        expected_ratings
        posterUrl
        total_ratings
        performance_favorites {
            id
         }
      }
}
`;


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
                        ID = {id}
                        image = {posterUrl}
                        title = {name}
                        date = {'~ ' + endDate}
                        rating = {total_ratings}
                        E_rating = {expected_ratings}
                        likes = {performance_favorites.length}
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
