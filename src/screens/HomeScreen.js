import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import HomeComponent from '../components/HomeComponent'
import PlayersComponent from '../components/PlayersComponent'
import ScoreComponent from '../components/ScoreComponent'

const HomeScreen = ({navigation}) => {

    const [status, setStatus] = useState(0)
    const [players, setPlayers] = useState(1)
    const [score, setScore] = useState(10)

    const moveToPlayerScreen = () => {
        setStatus(status + 1)
    }

    const moveToScoreScreen = (numPlayers) =>  {
        setPlayers(numPlayers)
        setStatus(status + 1)
    }

    const moveBackScreen = () => {
        if (status > 0) {
            setStatus(status - 1)
        }
    }

    const moveToSoloScreen = () => {
        navigation.navigate('Solo')
    }


    const renderElement = () => {
        switch(status) {
            case 0:
                return <HomeComponent moveToPlayerScreen={moveToPlayerScreen} moveToSoloScreen={moveToSoloScreen} />
            case 1:
                return <PlayersComponent moveToScoreScreen={moveToScoreScreen} />
            case 2: 
                if (players && players > 1) {
                    return <ScoreComponent numPlayers={players} navigation={navigation} moveBackScreen={moveBackScreen} />
                }
            default:
                setStatus(0)
                return <HomeComponent moveToPlayerScreen={moveToPlayerScreen} navigation={navigation}/>
        }
    }

    return (
        <SafeAreaView style={styles.safe}>
            {renderElement()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#fa983a'
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1 
    }
    
})

export default HomeScreen