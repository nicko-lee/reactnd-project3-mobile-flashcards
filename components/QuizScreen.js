import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from './Button';
import FlippableCard from './FlippableCard';
import PropTypes from 'prop-types';
// import setDailyNotification from '../utils/notifications';

class QuizScreen extends React.Component {

  static propTypes = {
    // this contains the entire deck from the Redux store passed via React Navigation from CardDeckDetail
    navigation: PropTypes.object.isRequired, 
  };

  state = { 
    currentCard: 0,
    points: 0 
  };

  _navigateBack() {
    const navigate = NavigationActions.back();
    this.props.navigation.dispatch(navigate);
  }

  _hasFinishedGame() {
    const { deck } = this.props.navigation.state.params;
    return (this.state.currentCard + 1 === deck.questions.length + 1);
  }

  _finishedMessage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={[styles.deckTitle, { textAlign: 'center' }]}>
          Good job! You have finished the deck!
        </Text>

        <View style={[styles.bottom, { marginTop: 40 }]}>
          <Button
            // style={styles.secondaryButton}
            // txtStyle={styles.secondaryButtonText}
            onPress={() => this._navigateBack()}
            children='Back to deck'
          >
          </Button>
          <Button 
            onPress={() => this._restartQuiz()}
            children='Restart quiz!'
          >   
          </Button>
        </View>
      </View>
    );
  }

  _restartQuiz() {
    this.setState({ currentCard: 0, points: 0 });
  }

  _nextCard(points) {
    this.setState(state => ({
      currentCard: (state.currentCard + 1),
      points: (state.points + points)
    }));
  }

  _content() {
    const { deck } = this.props.navigation.state.params;

    if (this._hasFinishedGame()) {
      // setDailyNotification({ startingFromDay: 1, overwriteExisting: true });

      return this._finishedMessage();
    }

    return (
      <View style={{ flex: 0.55 }}>  
        {/* remember that this itself is a component that contains View elements in them and that was stumping me as I didn't realise where all this random styling was coming from */}
        <FlippableCard card={deck.questions[this.state.currentCard]} />
         <View style={{ marginTop: 12 }}>
          <View style={styles.bottom}>
            <Button
              onPress={() => this._nextCard(0)}
              children='Incorrect'
            >
            </Button>
          </View>
          <View style={styles.bottom}>
            <Button
              onPress={() => this._nextCard(1)}
              children='Correct'
            >
            </Button>
          </View>
         </View>
      </View>
    );
  }

  render() {
    const { deck } = this.props.navigation.state.params;
    console.log("From QuizScreen inside render() to check value of deck", deck);
    return (
      <View style={styles.center}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckDescription}>
          Card: #{Math.min(this.state.currentCard + 1, deck.questions.length)} of {deck.questions.length}
        </Text>
        <Text style={styles.deckDescription}>Score: {this.state.points}</Text>
        
        {this._content()}
      </View>
    );
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
    marginTop: 10,
    marginBottom: 5
  },
  deckDescription: {
    color: 'gray',
    fontSize: 22,
    // fontWeight: 'bold',
    padding: 0,
    marginBottom: 5
  },
  bottom: {
    alignSelf: 'stretch',
    // backgroundColor: 'pink',
    marginTop: 5
  },
});

export default QuizScreen;
