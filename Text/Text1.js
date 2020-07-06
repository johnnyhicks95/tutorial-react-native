import REact, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Text1 = () => {
    return (
        <View style = { styles.container } >
            <Text style={ styles.text } >
                <Text style={styles.capitalLetter} >
                    L
                </Text>
                <Text>orem ipsum dolor</Text>
                <Text style={styles.wordBold} >orem ipsum dolor</Text>
                <Text style={styles.italicText} >orem ipsum dolor</Text>
                <Text style={styles.textShadow} >orem ipsum dolor</Text>
            </Text>
        </View>
    )
}

export default Text1

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginTop: 100,
        padding: 20
    },
    text: {
        color: '#41cdf4'
    },
    capitalLetter:{
        color: 'red'
    },
    wordBold: {
        fontWeigth: 'bold',
        color: 'black'
    },
    italicText: {
        color: '#37859b',
        fontStyle: 'italic'
    },
    textShadow: {
        textShadowColor: 'red',
        textShadowOffset: { 
            width: 2,
            height: 2
         },
         textShadowRadius: 5
    }
})