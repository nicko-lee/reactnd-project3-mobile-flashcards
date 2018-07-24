import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

class FlashcardDeck extends Component {

    static propTypes = {
        deckName: PropTypes.string.isRequired,
        numberOfCards: PropTypes.number.isRequired
      };

    render() {
        return (

        <TouchableOpacity 
            style={styles.deckContainer}
            onPress={() => this.props.navigation.navigate('CardDeckDetail', { 
                deckName: this.props.deckName,
                numberOfCards: this.props.numberOfCards
             })}>
            <Text>{this.props.deckName}</Text>
        </TouchableOpacity>

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

// export default FlashcardDeck but wrapped around withNavigation to pass props directly here
// https://reactnavigation.org/docs/en/connecting-navigation-prop.html
// cos apparently how it works is anything that is not a 'screen' will not be provided with the navigation prop automatically
// https://reactnavigation.org/docs/en/navigation-prop.html
export default withNavigation(FlashcardDeck);

