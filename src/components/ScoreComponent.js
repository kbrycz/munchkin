import React, {useState} from 'react'
import {StyleSheet, Dimensions, TouchableOpacity, Text, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const ScoreComponent = (props) => {
    const key = Platform.OS === 'ios' ? 'done' : 'next'
    const [score, setScore] = useState(10)

    const moveToGame = () => {
        const players = props.numPlayers
        props.navigation.navigate('Game', {players, score})
    }

    return (
        <>
        <TouchableOpacity style={styles.backButtonContainer} 
        onPress={props.moveBackScreen}>
            <Ionicons name="arrow-back" style={styles.backButton} />
        </TouchableOpacity> 
        <Text style={styles.title} h2>What is the Winning Score?</Text>
        <TextInput 
        maxLength={2}
        mixLength={2}
        style={styles.textInput}
        keyboardType = 'numeric'
        returnKeyType={key}
        value={score.toString()}
        placeholder="10"
        onChangeText={setScore}
        />
        <TouchableOpacity style={styles.playButtonContainer} 
        onPress={moveToGame}>
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
    textInput: {
        marginTop: 40,
        width: Dimensions.get('window').width * .4,
        marginLeft: Dimensions.get('window').width * .3,
        marginRight: Dimensions.get('window').width * .3,
        color: '#68a0cf',
        fontSize: 72,
        letterSpacing: 5,
        textTransform: 'uppercase',
        fontWeight: '900',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#68a0cf',
        borderRadius: 10,
        backgroundColor:'#fff',
        padding: 15,
    },
    playButton: {
        width: Dimensions.get('window').width * .8,
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
    },
    backButtonContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    backButton: {
        color: '#fff',
        fontSize: 42,
        letterSpacing: 3,
        textTransform: 'uppercase',
        fontWeight: '900',
        padding: 5,
        overflow: 'hidden'
    }
})

export default ScoreComponent