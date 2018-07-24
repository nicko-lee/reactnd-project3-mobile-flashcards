import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

class CardDeckDetail extends Component {

  componentDidMount = () => {
    console.log(this.props.navigation)
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  render() {
    return (
      <View>
        <Text>{this.props.navigation.state.params.deckName}</Text>
        <Text>{this.props.navigation.state.params.numberOfCards}</Text>
      </View>

    )
  }
}

export default CardDeckDetail;

