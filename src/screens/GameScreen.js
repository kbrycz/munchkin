import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, SafeAreaView, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import ScoreBoxComponent from '../components/ScoreBoxComponent'
import TitleBoxComponent from '../components/TitleBoxComponent'
import { Ionicons } from '@expo/vector-icons'; 

const GameScreen = ({navigation}) => {

    const players = navigation.getParam('players')
    const score = navigation.getParam('score')

    const [data, updateData] = useState([])

    useEffect(() => {
        setupGame()
    }, [])

    const setupGame = () => {
        for (let i = 0; i < players; ++i) {
            updateData(arr => [...arr, {
                id: i,
                name: 'Player ' + (i + 1),
                level: 1,
                combat: 1
            }])
        }
    }

    const restart = () => {
        let newData = []
        for (let i = 0; i < players; ++i) {
            newData.push(
                {
                    id: i,
                    name: data[i].name,
                    level: 1,
                    combat: 1
                }
            )
        }
        updateData(newData)

    }

    const changeName = (id, text) => {
        updateData(
            data.map(player => {
                if (player.id === id ) {
                    return {...player, name: text}
                }
                else {
                    return player
                }
            })
        )
    }

    const levelButtonPressed = (id, type) => {
        let playerObj = {}

        switch(type) {
            case 'plus':
                updateData(
                    data.map(player => {
                        if (player.id === id ) {
                            playerObj = {...player, level : player.level + 1, combat : player.combat + 1}
                            return {...player, level : player.level + 1, combat : player.combat + 1}
                        }
                        else {
                            return player
                        }
                    }
                ))
                
                if (playerObj.level === score) {
                    Alert.alert(
                        `Congratulations, ${playerObj.name}!`,
                        "You are today's winner! Play again?",
                        [
                            { text: "Exit", onPress: () => navigation.navigate('Home') },
                            { text: "Rematch", onPress: () => restart() },
                          
                        ]
                    );
                }
                break
            case 'minus':
                updateData(
                    data.map(player => 
                        player.id === id && player.level > 1 && player.combat > 1
                        ? {...player, level : player.level - 1, combat : player.combat - 1} 
                        : player
                ))
                break
            default:
                return
        }
    }

    const combatButtonPressed = (id, type) => {
        switch(type) {
            case 'plus':
                updateData(
                    data.map(player => 
                        player.id === id 
                        ? {...player, combat : player.combat + 1} 
                        : player
                ))
                break
            case 'minus':
                updateData(
                    data.map(player => 
                        player.id === id && player.combat > 1
                        ? {...player, combat : player.combat - 1} 
                        : player
                ))
                break
            default:
                return
        }
    }
      

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
            <KeyboardAvoidingView
            behavior="padding">
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <ScoreBoxComponent 
                        player={item} 
                        levelButtonPressed={levelButtonPressed} 
                        combatButtonPressed={combatButtonPressed}
                        changeName={changeName} />
                    )}
                    keyExtractor={player => player.id.toString()}
                    style={styles.list}
                />
            </KeyboardAvoidingView>
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
        left: 10,
        opacity: .5
    },
    container: {
        padding: 10
    }
})

const navigationOptions = {
    headerTransparent: false
}

export default GameScreen