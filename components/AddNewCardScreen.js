import React, { Component } from 'react'
import Button from './Button';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { DismissKeyboard } from './DismissKeyboard';
import PropTypes from 'prop-types';
import { addNewQuestion, addCard } from '../utils/api';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions/root';

class AddNewCardScreen extends Component {
    state = {
        questionText: '',
        answerText: ''
    }

    componentDidMount = () => {
        console.log("From AddNewCardScreen componentDidMount: ", this.props.navigation.state.params.deckId)
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired, // deckId and deckName 
        saveCardToStore: PropTypes.func.isRequired,
        appData: PropTypes.object.isRequired
    };

    postToDb = () => {
        console.log("From AddNewCardScreen: submit button just clicked triggering postToDb()")
        // prepare question and answer object to append to the deck's questions array
        const newQuestion = {
            question: this.state.questionText,
            answer: this.state.answerText
        }
        // update state in Redux store
        this.props.saveCardToStore(this.props.navigation.state.params.deckId, newQuestion);
        console.log("From AddNewCardScreen inside postToDb(). Checking fullState of Redux", this.props.fullState)

        // update state in AsyncStorage
        let newAsyncStoreState = addCard(this.props.navigation.state.params.deckId, newQuestion);
        console.log("From AddNewCardScreen inside postToDb(). Checking updated state of DB", newAsyncStoreState);

        // reroute to individual deck view
        this.props.navigation.navigate('CardDeckDetail', { 
            deckName: this.props.navigation.state.params.deckName,
            // numberOfCards
        })
    }

    render() {
        // console.log('full state', this.props.fullState)
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

function mapStateToProps (state) {
    return {
      appData: state.appData,
      fullState: state
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    saveCardToStore: (deckId, question) => dispatch(addCardToDeck(deckId, question))
  }) 

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCardScreen);

