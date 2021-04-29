import React, {useState} from 'react'
import {StyleSheet, Dimensions, TouchableOpacity, Text, TextInput, Alert} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

const ScoreComponent = (props) => {
    const key = Platform.OS === 'ios' ? 'done' : 'next'
    const [score, setScore] = useState(10)
    const [loaded] = useFonts({
        PressStart2P: require('../../assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    const moveToGame = () => {
        const players = props.numPlayers
        if (score < 5) {
            Alert.alert(
                "Invalid Winning Score",
                "Please Enter a Value of at Least 5",
                [
                  { text: "OK"}
                ]
              );
        } else {
            console.log(score)
            props.navigation.navigate('Game', {players, score})
        }
       
    }

    return (
        <>
        <TouchableOpacity style={styles.backButtonContainer} 
        onPress={props.moveBackScreen}>
            <Ionicons name="arrow-back" style={styles.backButton} />
        </TouchableOpacity> 
        <Text style={styles.title} h2>Winning Score?</Text>
        <TextInput 
        maxLength={2}
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
    textInput: {
        marginTop: Dimensions.get('window').height * .1,
        width: Dimensions.get('window').width * .7,
        marginLeft: Dimensions.get('window').width * .15,
        marginRight: Dimensions.get('window').width * .15,
        color: '#fa983a',
        fontSize: 62,
        letterSpacing: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fdd5ae',
        borderRadius: 10,
        backgroundColor:'#fdddbf',
        paddingTop: Dimensions.get('window').height * .05,
        paddingBottom: Dimensions.get('window').height * .05,
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
        color: '#feefe0',
        fontSize: 42,
        letterSpacing: 3,
        textTransform: 'uppercase',
        fontWeight: '900',
        padding: 5,
        overflow: 'hidden'
    }
})

export default ScoreComponent