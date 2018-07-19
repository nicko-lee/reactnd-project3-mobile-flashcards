import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


class FlashcardDeck extends Component {


    render() {
        return (

            <TouchableHighlight style={styles.deckContainer}>
                <Text>Hey</Text>
            </TouchableHighlight>

        )


    }


}

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        backgroundColor: 'silver',
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        margin: 7,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
          },
        // justifyContent: 'center',
        // paddingTop: 25
  }});

export default FlashcardDeck;
