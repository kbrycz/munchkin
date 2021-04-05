import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const GameScreen = ({navigation}) => {

    const players = navigation.getParam('players')
    const score = navigation.getParam('score')

    return (<>
        <Text>The Game screen</Text>
        <Text style={styles.title}>{players} and {score}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    }
})

export default GameScreen