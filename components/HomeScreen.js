import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FlashcardDeck from './FlashcardDeck';

class HomeScreen extends Component {


    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.titleText}>Your Flashcard Decks</Text>
                    <ScrollView style={styles.scrollViewContainer}> 
                        <Text>Select a deck to view all the cards it contains, add new cards or start a quiz:</Text>
                        <FlashcardDeck />
                        <FlashcardDeck />
                        <FlashcardDeck />
                        <FlashcardDeck />
                        <FlashcardDeck />
                        <FlashcardDeck />
                        <FlashcardDeck />
                        <FlashcardDeck />
                        <FlashcardDeck />
                        <FlashcardDeck />
                    </ScrollView>
                </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        // justifyContent: 'center',
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
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 20
    },
  });

export default HomeScreen;
