import React from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 

const SoloComponent = ({title, setScore, number}) => {

    const [loaded] = useFonts({
        PressStart2P: require('../../assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.number}>{number}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setScore(1, title)}>
                    <AntDesign style={styles.plus} name="plus" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setScore(-1, title)}>
                    <AntDesign style={styles.minus} name="minus" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontFamily: 'PressStart2P',
        fontSize: 40,
        textAlign: 'center',
        color: '#3c3c3c',
        width: Dimensions.get('window').width * .9,
        marginTop: 30,
        marginLeft: Dimensions.get('window').width * .05,
        marginRight: Dimensions.get('window').width * .05,
        marginBottom: 30
    },
    button: {
        flex: 1
    },
    number: {
        fontFamily: 'PressStart2P',
        fontSize: 50,
        textAlign: 'center',
        color: '#3c3c3c',
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#3c3c3c',
        padding: 30,
        width: Dimensions.get('window').width * .5,
        marginLeft: Dimensions.get('window').width * .25,
        marginRight: Dimensions.get('window').width * .25,
    },     
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: Dimensions.get('window').width * .05,
        marginRight: Dimensions.get('window').width * .05,
    },
    plus: {
        padding: 15,
        fontSize: 42,
        color: 'white',
        backgroundColor: '#f97e08',
        textAlign: 'center',
    },
    minus: {
        padding: 15,
        fontSize: 42,
        color: 'white',
        backgroundColor: '#fcbb7c',
        textAlign: 'center'
    },
})

export default SoloComponent