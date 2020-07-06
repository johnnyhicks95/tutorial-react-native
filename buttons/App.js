import React, { Component } from  'react'
import { Button, TouchableWithoutFeedback } from 'react-native'

const App = () => {
    const handlePress = () => false   

    return (
        <Button
            onPress = {handlePress}
            title = "Red button!"
            color = "red"
         />
    )
}
export default App

// ************************
// Touchable opacity
import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const App = () => {
    return(
        <View style={styles.container} >
            <TouchableOpacity>
                <Text style= { styles.text } >
                    Button
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default App

const sty;es = StyleSheet.create({
    container: {
        aligntItems: 'center'
    },
    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})

// **********************
// Touchable highlight
import React from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'

const App = ( props ) => {
    return (
        <View style={ styles.container } >
            <TouchableOpacity>
                <Text style={styles.text} >
                    Button
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default App

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center'
    },
    text: {
        borderWidth: 1,
        paddin: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})



// ******************
// Touchable native feedback
import React from 'react'
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native'

const Home = ( props ) => {
    return (
        <View style={styles.container} >
            <TouchableNativeFeedback>
                <Text style={styles.text} >
                Button
                </Text>
            </TouchableNativeFeedback>
        </View>
    )
}
export default Home

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center'
    },
    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
}) 

// ************
// Touchable without feedback: removes the animation
// <TouchableWithoutFeedback>
//     <Text>
//     </Text>
// </TouchableWithoutFeedback>
