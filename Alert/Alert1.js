import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Alert1 = () => {
    const showAlert = () => {
        Alert.alert(
            'You need to ...'
        )
    }

    return (
        <TouchableOpacity
            onPress={ showAlert }
            style={styles.button}
        >
            <Text>Alerta</Text>
        </TouchableOpacity>
    )
}

export default Alert1

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4ba3b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 100
    }
})