import React from 'react'
import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native'

const PlayersComponent = (props) => {

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

    const buttonPressed = (numPlayers) => {
        navigation.navigate('Score', {numPlayers})
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
        marginBottom: 30
    },
    playerButton: {
        marginTop: 30,
        width: Dimensions.get('window').width * .4,
        marginLeft: Dimensions.get('window').width * .3,
        marginRight: Dimensions.get('window').width * .3,
        color: '#fff',
        fontSize: 24,
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

})

export default PlayersComponent