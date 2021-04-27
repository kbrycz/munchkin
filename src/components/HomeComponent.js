import React from 'react'
import {StyleSheet, Dimensions, TouchableOpacity, Text, Image} from 'react-native'
import { useFonts } from 'expo-font';

const HomeComponent = (props) => {

    const [loaded] = useFonts({
        PressStart2P: require('../../assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }

    return (
        <>
        <Text style={styles.title} h1>Munchkin Score Keeper</Text>
        <Image style={styles.image} source={require('../../assets/munchkin-logo.png')} />
        <TouchableOpacity style={styles.playButtonContainer} 
        onPress={props.moveToPlayerScreen}>
            <Text style={styles.playButton}>Play</Text>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        width: Dimensions.get('window').width * .9,
        marginLeft: Dimensions.get('window').width * .05,
        marginRight: Dimensions.get('window').width * .05,
        marginTop: Dimensions.get('window').height * .1,
        textAlign: 'center',
        color: '#feefe0',
        fontWeight: '900',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        letterSpacing: 5,
        textTransform: 'uppercase',
        fontSize: 42,
        lineHeight: 80,
        fontFamily: 'PressStart2P'
    },
    playButton: {
        width: Dimensions.get('window').width * .8,
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        color: '#fa983a',
        fontSize: 32,
        letterSpacing: 5,
        textTransform: 'uppercase',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fa983a',
        borderRadius: 10,
        backgroundColor:'#feefe0',
        padding: 20,
        overflow: 'hidden',
        fontFamily: 'PressStart2P'

    },
    image: {
        marginTop: 40,
        width: Dimensions.get('window').width * .6,
        marginLeft: Dimensions.get('window').width * .2,
        marginRight: Dimensions.get('window').width * .2,
        height: 300
    },
    playButtonContainer: {
        position: 'absolute',
        bottom: 80,
        left:0,
    }
})

export default HomeComponent