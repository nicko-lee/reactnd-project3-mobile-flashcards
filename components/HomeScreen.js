import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import FlashcardDeck from './FlashcardDeck';
import { SEED_STARTER_DECKS } from '../utils/seedStarterDecks';
import { saveData, fetchData } from '../utils/api';
import Button from './Button';
import { getAllDecks } from '../actions/root';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HomeScreen extends Component {
    static propTypes = {
        appData: PropTypes.object.isRequired
      };

    componentDidMount = async () => {
        // grabs data from mock DB and does initial load of app state into Redux
        await this.getData();
    }

    getData = async () => {
        await fetchData().then(appData => {
            console.log(`HomeScreen.getData() loaded straight from AsyncStorage: `, appData);
            
            // loading global appData into Redux
            this.props.saveDecksToStore(appData);
            console.log(`HomeScreen loaded Redux store and checking receipt: `, this.props.appData);
            console.log("From HomeScreen.getData() - keys in redux", Object.keys(this.props.appData.appData)); // damn this was where the painstaking error was at!
        });
    }    

    resetDecks = () => {
        saveData(SEED_STARTER_DECKS);
        Alert.alert('Reload App', 'Please press Cmd + R to refresh page to see newly resetted decks');
    }

    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.titleText}>Your Flashcard Decks</Text>
                    <ScrollView style={styles.scrollViewContainer}> 
                        <Text style={styles.instructionText}>Select a deck to view all the cards it contains, add new cards or start a quiz:</Text>
                        {   
                            Object.keys(this.props.appData.appData).map( deckId => {
                            return (
                            <FlashcardDeck 
                            key={deckId} 
                            deckName={this.props.appData.appData[deckId].title}
                            numberOfCards={this.props.appData.appData[deckId].questions.length}
                            />)
                            })}
                    </ScrollView>
                    <View style={styles.button}>
                        <Button
                            children="Reset Decks"
                            onPress={this.resetDecks}
                        />
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 15
    },
    scrollViewContainer: {
        // backgroundColor: '#f8f9fa'
    },
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 29,
      fontWeight: 'bold',
      paddingBottom: 15
    },
    instructionText: {
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 10,
        padding: 8
    },
    button: {
        // backgroundColor: 'pink',
        marginTop: 5,
        width: 300
    },  
  });

// export default HomeScreen;

function mapStateToProps (state) {
  return {
      appData: state
  }
}

const mapDispatchToProps = dispatch => ({
  saveDecksToStore: (decks) => dispatch(getAllDecks(decks))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)