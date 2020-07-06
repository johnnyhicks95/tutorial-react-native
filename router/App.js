//  we will use react native router flux
// npm i react-native-router-flux- --save
import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import Routes from '.Rroutes.js'

class reactTutorialApp extends Component{
    render( ) {
        return (
            <Routes />
        )
    }
}

export default reactTutorialApp

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)