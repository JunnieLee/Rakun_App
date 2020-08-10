import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, Button, Image, TouchableOpacity} from 'react-native';
import SearchPage from './SearchPage';


export default class MainPage extends Component {
    state = {
        isVisible: false, //state of modal default false
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.bigletter}>This is definately the main page</Text>
                <Modal animationType = {"slide"} transparent = {false}
                       visible = {this.state.isVisible} >
                    {/*All views of Modal*/}
                    {/*Animation can be slide, slide, none*/}
                    <View style = {styles.modal}>
                        <TouchableOpacity onPress={ ()=>{ this.setState({ isVisible:!this.state.isVisible}) } }>
                            <Image
                                source={require('../.././assets/icons/close.png')}
                                style={styles.closeTab}
                            />
                        </TouchableOpacity>
                        {/* Show Search Page */}
                        <SearchPage />
                    </View>
                </Modal>
                {/*Button will change state to true and view will re-render*/}
                <Button
                    title="Click To Start Searching"
                    onPress = {() => {this.setState({ isVisible: true})}}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        marginTop:30,
        marginBottom:30
    },
    modal: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    },
    bigletter: {
        fontSize : 20,
        margin: 20,
        marginBottom: 100
    },
    closeTab : {
        width: 25,
        height: 28,
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
});


//////////////////////////////////
/*
const MainPage =  props => {
    return (
        <View style={styles.screen}>
            <Text>This is MainPage!</Text>
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

export default MainPage;
*/
