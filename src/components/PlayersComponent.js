import React from 'react'
import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native'
import { useFonts } from 'expo-font';

const PlayersComponent = (props) => {

    const [loaded] = useFonts({
        PressStart2P: require('../../assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    
    buttonsArray = []
    for (let i = 2; i < 7; i++) {
        buttonsArray.push(
            <TouchableOpacity style={styles.playButtonContainer} 
            onPress={() => props.moveToScoreScreen(i)}
            key={i}>
                <Text style={styles.playerButton}>{i}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
        <Text style={styles.title} h2>How Many Players?</Text>
        {buttonsArray}
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        width: Dimensions.get('window').width * .8,
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        marginTop: Dimensions.get('window').height * .1,
        marginBottom: 20,
        textAlign: 'center',
        color: '#feefe0',
        fontWeight: '900',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        letterSpacing: 5,
        textTransform: 'uppercase',
        fontSize: 35,
        lineHeight: 80,
        fontFamily: 'PressStart2P'
    },
    playerButton: {
        marginTop: 30,
        width: Dimensions.get('window').width * .9,
        marginLeft: Dimensions.get('window').width * .05,
        marginRight: Dimensions.get('window').width * .05,
        color: '#fa983a',
        fontSize: 24,
        letterSpacing: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fa983a',
        borderRadius: 10,
        backgroundColor:'#feefe0',
        padding: 15,
        overflow: 'hidden',
        fontFamily: 'PressStart2P'

    },

})

export default PlayersComponent