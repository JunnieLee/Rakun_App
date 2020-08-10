import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const SearchPage =  props => {
    return (
        <View style={styles.screen}>
            <Text>Search Page Open!!</Text>
            <Text>Search Everything you want!!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default SearchPage;
