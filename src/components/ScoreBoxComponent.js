import React from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const ScoreBoxComponent = ({player}) => {



    return (
        <View style={styles.container}>
            <TextInput style={styles.name}>{player.name}</TextInput>
            <View style={styles.box}>
                <Text style={styles.item}>{player.level}</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <TouchableOpacity>
                            <AntDesign style={styles.plus} name="plus" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btn}>
                        <TouchableOpacity>
                            <AntDesign style={styles.minus} name="minus" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.item}>{player.combat}</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <TouchableOpacity>
                            <AntDesign style={styles.plus} name="plus" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btn}>
                        <TouchableOpacity>
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
        borderWidth: 2,
        marginBottom: 5,
        flexDirection: 'row'
    },
    name: {
        fontSize: 30,
        borderWidth: 2,
        flex: 1,
        textAlign: 'center'
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 2,
        textAlign: 'center'
    },
    item: {
        padding: 20,
        fontSize: 32,
        flex: 1,
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    plus: {
        padding: 10,
        fontSize: 24,
        color: 'white',
        backgroundColor: 'green',
        textAlign: 'center'
    },
    minus: {
        padding: 10,
        fontSize: 24,
        color: 'white',
        backgroundColor: 'red',
        textAlign: 'center'
    },
    btn: {
        flex: 1
    },
})

export default ScoreBoxComponent