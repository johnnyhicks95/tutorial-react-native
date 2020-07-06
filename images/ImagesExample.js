// Images from local storage
import React, { Component } from 'react'
import { Image } from 'react-native'

const ImagesExample = ( ) => (
    <Image source= {require('C:/User/Tutorial/Desktop/logo.png')} />
)
export default ImagesExample

// Network images
// width and height for

import React,{ Component } from 'react'
import { View, Image } from 'react-native'

const ImagesExample = ()=> {
    <Image
        source = { {uri:'https://twitter.api/images/12345.png'} }
        style = {{ width: 200, height: 200 }}
     />
}
export default ImagesExample

