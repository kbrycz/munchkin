import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const TitleBoxComponent = () => {

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
        padding: 10,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'gray',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'purple',
        color: 'white'
        
    }
})

export default TitleBoxComponent