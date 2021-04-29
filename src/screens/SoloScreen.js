import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, TouchableOpacity, Alert} from 'react-native'
import SoloComponent from '../components/SoloComponent'
import { Ionicons } from '@expo/vector-icons'; 

const SoloScreen = ({navigation}) => {

    const [level, setLevel] = useState(1)
    const [combat, setCombat] = useState(1)

    const setScore = (num, title) => {
        console.log(title)
        if (title === 'Level') {
            console.log("inside level")
            if (level === 1 && num < 0) {
                return
            }
            setLevel(level + num)
            if (combat === 1 && num < 0) {
                return
            }
            setCombat(combat + num)
        } else {
            if (combat === 1 && num < 0) {
                return
            }
            setCombat(combat + num)
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

    return (
        <SafeAreaView style={styles.screen}>
            <SoloComponent number={level} setScore={setScore} title="Level"/>
            <SoloComponent number={combat} setScore={setScore} title="Combat"/>
            <TouchableOpacity onPress={returnHome}>
                <Ionicons style={styles.quit} name="arrow-back-circle-sharp" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        backgroundColor: '#feefe0',
        flexDirection: 'column'
    },
    solo: {
        marginBottom: 300
    },
    div: {
        marginBottom: 20,
        marginTop: 20
    },
    quit: {
        fontSize: 62,
        color: '#f97e08',
        position: 'absolute',
        bottom: -25,
        left: 15,
        opacity: .5
    },
})

export default SoloScreen