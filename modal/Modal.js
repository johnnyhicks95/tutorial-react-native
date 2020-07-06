import React, { Component } from 'react'

import { Modal, Text, TouchableHighlight, View, StyleSheet  } from 'react-native'

class ModalExample extends Component {
    state = {
        modalVisible: false
    }

    toggleModal(visible){
        this.setState({ modalVisible: visible })
    }

    render() {
        return (
            <View style={StyleSheet.container} >
                <Modal animationType={"slide"} transparent={false} 
                    visible={this.state.modalVisible}
                    onRequestClose={ () => {console.log("Modal has benn closed.");
                    } }
                >
                    <View style={styles.modal} >
                        <Text style={ styles.text } >Modal is open!</Text>
                        <TouchableHighlight onPress={ () =>{
                            this.toggleModal( !this.state.modalVisible )
                        } } >
                            <text style={ styles.text } >Close modal</text>
                        </TouchableHighlight>
                    </View>
                </Modal>

                <TouchableHighlight onPress={ () => {
                    this.toggleModal(True)
                } } >
                        <Text style={styles.text} >Open modal</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default ModalExample

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor:'#ede3f2',
        padding: 100
    },
    modal: {
        felx: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
})