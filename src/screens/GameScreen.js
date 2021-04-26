import React from 'react'
import {View, StyleSheet, Text, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import ScoreBoxComponent from '../components/ScoreBoxComponent'
import TitleBoxComponent from '../components/TitleBoxComponent'
import { Ionicons } from '@expo/vector-icons'; 

const GameScreen = ({navigation}) => {

    // const players = navigation.getParam('players')
    // const score = navigation.getParam('score')
    const players = 5
    const score = 10

    const data = [
        {
          id: 1,
          name: 'Player 1',
          level: 6,
          combat: 10
        },
        {
            id: 2,
            name: 'Player 2',
            level: 3,
            combat: 4
        },
        {
            id: 3,
            name: 'Player 3',
            level: 13,
            combat: 14
        },
      ];
      

    const returnHome = () => {
        Alert.alert(
            "Returning to Home Screen",
            "All of your current data will be lost. Do you wish to continue?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Exit", onPress: () => navigation.navigate('Home') }
            ]
          );
    }

    return (<>
        <SafeAreaView style={styles.screen}>
            <TitleBoxComponent />
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ScoreBoxComponent player={item} />
                )}
                keyExtractor={player => player.id}
                style={styles.list}
            />
            <TouchableOpacity onPress={returnHome}>
                <Ionicons style={styles.quit} name="arrow-back-circle-sharp" />
            </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%'
    },
    title: {
        fontSize: 45
    },
    list: {
        overflow: 'visible'
    },
    quit: {
        fontSize: 62,
        color: 'black',
        position: 'absolute',
        bottom: 10,
        left: 10
    }
})

export default GameScreen