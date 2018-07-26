import React, { Component } from 'react'
import Button from './Button';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { DismissKeyboard } from './DismissKeyboard';
import PropTypes from 'prop-types';
import { saveData, fetchData } from '../utils/api';

class AddNewCardScreen extends Component {
    state = {
        questionText: '',
        answerText: ''
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired
    };

    postToDb = () => {
        // prepare question and answer object to append to the deck's questions array
        const newQuestion = {
            question: this.state.questionText,
            answer: this.state.answerText
        }
        // search AsyncStorage for correct slice of state (i.e. the correct deck of the array of decks)
        fetchData().then(appData => {
            // and then append new question to the deck array
            appData.forEach(deck => {
                if (deck.title === this.props.navigation.state.params.deckName) {
                    deck.questions.push(newQuestion)
                }
            })
            console.log(appData)
        // make API call to save to AsyncStorage. So basically we are using async storage as central source of truth
        saveData(appData);
        })
    }

    render() {
        return ( 
            <DismissKeyboard>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Deck: {this.props.navigation.state.params.deckName}</Text>
                    {/* <Text>{this.state.questionText}</Text> */}
                        <TextInput
                            multiline = {true}
                            placeholder='Question'
                            keyboardType='default'
                            numberOfLines = {3}
                            onChangeText={(questionText) => this.setState({questionText})}
                            value={this.state.questionText}
                            style={styles.textInput}
                            // onSubmitEditing={Keyboard.dismiss}
                        />
                        <TextInput
                            multiline = {true}
                            placeholder='Answer'
                            keyboardType='default'
                            numberOfLines = {3}
                            onChangeText={(answerText) => this.setState({answerText})}
                            value={this.state.answerText}
                            style={styles.textInput}
                            // onSubmitEditing={Keyboard.dismiss}
                        />
                    <Button 
                        children="Create New Card"
                        onPress={this.postToDb}
     
                    />
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
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
})

export default AddNewCardScreen;
