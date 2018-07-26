import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Button from './Button';

class CardDeckDetail extends Component {

  componentDidMount = () => {
    console.log(this.props.navigation)
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.state.params.deckName}</Text>
        <Text>{this.props.navigation.state.params.numberOfCards}</Text>
        <Button 
          children="Add Card"
          onPress={() => this.props.navigation.navigate('AddNewCard',
          {
            deckName: this.props.navigation.state.params.deckName
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

export default CardDeckDetail;

