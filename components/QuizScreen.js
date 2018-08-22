import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from './Button';
import FlippableCard from './FlippableCard';
import PropTypes from 'prop-types';
import { setLocalNotification, clearLocalNotifications } from '../utils/notificationsHelper';

class QuizScreen extends React.Component {

  static propTypes = {
    // this contains the entire deck from the Redux store passed via React Navigation from CardDeckDetail
    navigation: PropTypes.object.isRequired, 
  };

  state = { 
    currentCard: 0,
    points: 0 
  };

  componentDidMount = () => {
    AsyncStorage.getItem("MobileFlashcards:notifications")
    .then(results => console.log("From QuizScreen checking if Notifications Key is inside AsyncStore: ",JSON.parse(results)))
  }

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
        <Text style={[styles.finishMessage, { textAlign: 'center' }]}>
          Awesome work! You have finished the deck!
        </Text>

        <View style={[styles.button, { marginTop: 40 }]}>
          <Button
            onPress={() => this._navigateBack()}
            children='Back to deck'
          >
          </Button>
        </View>
        <View style={styles.button}>
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
      // clear todays notification prompt as you've done your quiz today. Then set tomorrow's reminder
      clearLocalNotifications().then(setLocalNotification());

      return this._finishedMessage();
    }

    return (
      <View style={{ flex: 0.55 }}>  
        {/* remember that this itself is a component that contains View elements in them and that was stumping me as I didn't realise where all this random styling was coming from */}
        <FlippableCard card={deck.questions[this.state.currentCard]} />
         <View style={{ marginTop: 12 }}>
          <View style={styles.button}>
            <Button
              onPress={() => this._nextCard(0)}
              children='Incorrect'
            >
            </Button>
          </View>
          <View style={styles.button}>
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
      <View style={styles.container}>
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

  container: {
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
  finishMessage: {
    fontSize: 29,
    marginBottom: 60
  },
  deckDescription: {
    color: 'gray',
    fontSize: 22,
    // fontWeight: 'bold',
    padding: 0,
    marginBottom: 5
  },
  button: {
    alignSelf: 'stretch',
    // backgroundColor: 'pink',
    marginTop: 5
  },
});

export default QuizScreen;
