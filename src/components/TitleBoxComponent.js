import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { useFonts } from 'expo-font';

const TitleBoxComponent = () => {
    const [loaded] = useFonts({
        PressStart2P: require('../../assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.title}>Level</Text>
            <Text style={styles.title}>Combat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        opacity: 1
    },

    title: {
        padding: 12,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#fa983a',
        color: '#feefe0',
        fontFamily: 'PressStart2P'
        
    }
})

export default TitleBoxComponent