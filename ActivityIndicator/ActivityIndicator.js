// shows an animation when loading
import React, { Component } from ' react'
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class ActivityIndicator extends Component {

    state = { animating: true }

    closeActivityIndicator = () => setTimeout( () => this.setState({
        animating: false
    }), 30000 )

    componentDidMount = () => this.closeActivityIndicator()

    render(){
        const animating = this.state.animating

        return (
            <View style={styles.container} >
                <ActivityIndicator
                    animating = { animating }
                    color = '#bc2b78'
                    size = "large"
                    style = {styles.activityIndicator}
                />
            </View>
        )
    }

}

export default ActivityIndicator

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
})