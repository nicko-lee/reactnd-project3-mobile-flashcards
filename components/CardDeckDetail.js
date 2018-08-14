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
      <View style={styles.container}>
        <Text>{this.props.navigation.state.params.deckName}</Text>
        <Text>{this.props.deck.questions.length}</Text>
        <Button 
          children="Add Card"
          onPress={() => this.props.navigation.navigate('AddNewCard',
          {
            deckName: this.props.navigation.state.params.deckName,
            deckId: this.props.navigation.state.params.deckId
          }
        )}     
        />
        <Button children="Start Quiz"/>
      </View>

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
}})

// export default CardDeckDetail;

function mapStateToProps (state, ownProps) {
  return {
    deck: state.appData[ownProps.navigation.state.params.deckId]
  }
}

export default connect(mapStateToProps)(CardDeckDetail)

