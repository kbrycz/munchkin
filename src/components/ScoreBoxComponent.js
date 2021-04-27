import React from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

const ScoreBoxComponent = ({player, levelButtonPressed, combatButtonPressed, changeName}) => {
    const [loaded] = useFonts({
        PressStart2P: require('../../assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <TextInput maxLength={8} style={styles.name} onChangeText={(text) => changeName(player.id, text)} >{player.name}</TextInput>
            <View style={styles.box}>
                <Text style={styles.item}>{player.level}</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <TouchableOpacity onPress={() => levelButtonPressed(player.id, 'plus')}>
                            <AntDesign style={styles.plus} name="plus" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btn}>
                        <TouchableOpacity onPress={() => levelButtonPressed(player.id, 'minus')}>
                            <AntDesign style={styles.minus} name="minus" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.item}>{player.combat}</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <TouchableOpacity onPress={() => combatButtonPressed(player.id, 'plus')}>
                            <AntDesign style={styles.plus} name="plus" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btn}>
                        <TouchableOpacity onPress={() => combatButtonPressed(player.id, 'minus')}>
                            <AntDesign style={styles.minus} name="minus" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 14,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 2,
        borderColor: '#fdcc9d',
        flex: 1,
        textAlign: 'center',
        color: '#3c3c3c',
        fontFamily: 'PressStart2P'
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 2,
        borderColor: '#fdcc9d',
        textAlign: 'center'
    },
    item: {
        padding: 20,
        fontSize: 24,
        flex: 1,
        textAlign: 'center',
        color: '#3c3c3c',
        fontFamily: 'PressStart2P'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    plus: {
        padding: 10,
        fontSize: 24,
        color: 'white',
        backgroundColor: '#f97e08',
        textAlign: 'center'
    },
    minus: {
        padding: 10,
        fontSize: 24,
        color: 'white',
        backgroundColor: '#fcbb7c',
        textAlign: 'center'
    },
    btn: {
        flex: 1
    },
})

export default ScoreBoxComponent