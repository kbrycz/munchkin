import React from 'react'
import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native'
import ScoreBoxComponent from '../components/ScoreBoxComponent'

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

    return (<>
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ScoreBoxComponent player={item} />
                )}
                keyExtractor={player => player.id}
            />
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    }
})

export default GameScreen