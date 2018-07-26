import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Button from './Button';
import { DismissKeyboard } from './DismissKeyboard';

class AddNewDeckScreen extends Component {
    state = {
        text: ''
    }


    render() {
        return (
            <DismissKeyboard>
                <View style={styles.container}>
                    <Text style={styles.titleText}>What do you want to name your new deck?</Text>
                        <TextInput
                            multiline = {true}
                            placeholder='Give your deck a name'
                            keyboardType='default'
                            numberOfLines = {3}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            style={styles.textInput}
                            // onSubmitEditing={Keyboard.dismiss}
                        />
                    <Button children="Create New Deck"/>
                </View>    
            </DismissKeyboard>

        )
    }   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'powderblue',
        alignItems: 'stretch',
        borderRadius: 25,
        padding: 10,
        margin: 5,
        justifyContent: 'flex-start',
        paddingTop: 25,
  },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    textInput: {
        height: 75,
        margin: 20,
        padding: 10,
        borderColor: 'silver',
        borderWidth: 1,
        borderRadius: 5,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
          },
    },
});

export default AddNewDeckScreen;
