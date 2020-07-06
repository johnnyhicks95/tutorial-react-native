import React, {Component} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
    state = {
        email = '',
        password: ''
    }

    handleEmail = (text) => {
        this.setState({ emailL: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    login = (email, pass) => {
        alert('email: '+ email + ' password: '+pass)
    } 

    render () {
        return(
            <View style={StyleSheet.container} >
                <TextInput
                    style= {StyleSheet.input}
                    underlineColorAndroid="transparent"
                    placeholder= "Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={ this.handleEmail }
            />
                <TextInput
                    style= { StyleSheet.input }
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText= { this.handlePassword }
                />
                <TouchableOpacity
                    style = { StyleSheet.submitButton }
                    onPress = {
                        ( ) => this.login( this.state.email, this.state.password )
                    }
                />
                <Text style={ StyleSheet.submitButtonText } > Submit </Text>
            </View>
        )
    }
}

export default Innputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40
    },
    submitButtonText: {
        color: 'white'
    }
})