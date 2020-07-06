import React, { Component } from 'react'
import { View } from 'react-native'
import Switch from './Switch.js'

export default class HomeContainer extends Component {
    constructor() {
        super()
        this.state = {
            switch1Value: false
        }
    }
    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        console.log('Switch 1  is:' + value);
    }

    render () {
        return (
            <View>
                <Switch 
                    toggleSwitch1= { this.toggleSwitch1 }
                    switchValue = { this.state.switch1Value }
                 />
            </View>
        )
    }
}