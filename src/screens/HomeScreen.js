import React from 'react'
import {ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native'

const HomeScreen = ({navigation}) => {

    const image = { uri: "https://reactjs.org/logo-og.png" };

    return (
        <ImageBackground style={ styles.background } 
        resizeMode='cover' 
        source={require('../../assets/background.jpg')}
        blurRadius={3}>
        <Text style={styles.title} h1>Munchkin Score Keeper</Text>
        <TouchableOpacity style={styles.playButtonContainer} 
        onPress={() => navigation.navigate('Info')}>
            <Text style={styles.playButton}>Play</Text>
        </TouchableOpacity>


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        flex: 1 
    },
    title: {
        width: Dimensions.get('window').width * .9,
        marginLeft: Dimensions.get('window').width * .05,
        marginRight: Dimensions.get('window').width * .05,
        marginTop: Dimensions.get('window').height * .15,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '900',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        letterSpacing: 5,
        textTransform: 'uppercase',
        fontSize: 42,
    },
    playButton: {
        width: Dimensions.get('window').width * .8,
        height: '200px',
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        color: '#fff',
        fontSize: 32,
        letterSpacing: 5,
        textTransform: 'uppercase',
        fontWeight: '900',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#68a0cf',
        borderRadius: 10,
        backgroundColor:'#68a0cf',
        padding: 15,
        overflow: 'hidden'

    },
    playButtonContainer: {
        position: 'absolute',
        bottom: 80,
        left:0,
    }
})

export default HomeScreen