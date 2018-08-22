import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Button from './Button';
import { fetchData } from '../utils/api';
import { connect } from 'react-redux';

class CardDeckDetail extends Component {

  // note that navigation includes 2 additional params I added from this guy's parent: deckName and deckId
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    // note that deck comes from Redux store
    deck: PropTypes.object.isRequired 
  };

  componentDidMount = () => {
      console.log("CardDeckDetail confirming received Redux props ", this.props.deck)
  }

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.deckTitle}>{this.props.navigation.state.params.deckName}</Text>
        <Text style={styles.deckDescription}>Deck contains: {this.props.deck.questions.length} cards</Text>
        <View style={styles.bottom}>
          <Button 
              children="Add Card"
              onPress={() => this.props.navigation.navigate('AddNewCard',
              {
                deckName: this.props.navigation.state.params.deckName,
                deckId: this.props.navigation.state.params.deckId
              }
            )}     
          />
        </View>
        <View style={styles.bottom}>
          <Button 
            onPress={() => this.props.navigation.navigate('QuizScreen',
            {
              deck: this.props.deck
            }
            )}
            children="Start Quiz"
          />
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    // backgroundColor: 'powderblue', 
    flex: 1
  },
  deckTitle: {
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  deckDescription: {
    color: 'gray',
    fontSize: 22,
    padding: 0,
    marginBottom: 20
  },
  bottom: {
    alignSelf: 'stretch',
    // backgroundColor: 'pink',
    marginTop: 5
  },
})

// export default CardDeckDetail;

function mapStateToProps (state, ownProps) {
  return {
    deck: state.appData[ownProps.navigation.state.params.deckId]
  }
}

export default connect(mapStateToProps)(CardDeckDetail)

