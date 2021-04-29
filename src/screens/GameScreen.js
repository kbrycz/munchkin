import React, {useState, useEffect} from 'react'
import {StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import ScoreBoxComponent from '../components/ScoreBoxComponent'
import TitleBoxComponent from '../components/TitleBoxComponent'
import { Ionicons } from '@expo/vector-icons'; 

const GameScreen = ({navigation}) => {

    const players = navigation.getParam('players')
    const score = navigation.getParam('score')

    // const players = 5
    // const score = 8

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
                if (playerObj.level >= score) {
                    console.log("were in")
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
                        changeName={changeName}
                        players={players} />
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
        height: '100%',
        backgroundColor: '#feefe0'
    },
    title: {
        fontSize: 45
    },
    list: {
        height: '95%'
    },
    quit: {
        fontSize: 62,
        color: '#f97e08',
        position: 'absolute',
        bottom: -25,
        left: 15,
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