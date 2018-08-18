import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Button from './Button';
import { DismissKeyboard } from './DismissKeyboard';
import { addNewDeck } from '../actions/root';
import { addDeck } from '../utils/api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AddNewDeckScreen extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired,  
        addDeckToStore: PropTypes.func.isRequired
    };

    postToDb = () => {
        // store the user input
        let deckName = this.state.text;

        // reset the text field so the next time someone returns to this screen it will be blank
        this.setState({ text: '' });

        // update state in Redux store
        this.props.addDeckToStore(deckName);
        console.log("From AddNewDeckScreen inside postToDb(). Checking fullState of Redux", this.props.fullState)

        // update state in AsyncStorage
        let newAsyncStoreState = addDeck(deckName);
        console.log("From AddNewDeckScreen inside postToDb(). Checking updated state of DB", newAsyncStoreState);

        // reroute to individual deck view
        this.props.navigation.navigate('CardDeckDetail', { 
            deckName,
            deckId: deckName.replace(/\s/g, '')
        })
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
                    <Button 
                        children="Create New Deck"
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

// hmm though I don't actually need this data for this component but for some reason I cannot remove it
// without a mapStateToProps param, the connect function below won't work so I just left this in here
function mapStateToProps (state) {
    return {
      appData: state.appData,
      fullState: state
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    addDeckToStore: deckName => dispatch(addNewDeck(deckName))
  }) 

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDeckScreen);
// export default AddNewDeckScreen;
