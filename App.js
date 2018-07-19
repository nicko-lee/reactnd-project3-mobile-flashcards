import React from 'react';
import FlashcardDeck from './components/FlashcardDeck';
import { createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from './components/HomeScreen';
import AddNewDeckScreen from './components/AddNewDeckScreen';

export default class App extends React.Component {
  render() {
    return (
        <Tabs />
    );
  }
}

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='home' size={30} color={tintColor} />
    },
  },
  AddNewDeck: {
    screen: AddNewDeckScreen,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
},
);

