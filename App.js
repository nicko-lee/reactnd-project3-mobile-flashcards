import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from './components/HomeScreen';
import AddNewDeckScreen from './components/AddNewDeckScreen';
import CardDeckDetail from './components/CardDeckDetail';
import { Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <Tabs />
    );
  }
}
  
  // list out all the screens in your app
  const HomeStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      },
    },
    CardDeckDetail: {
      screen: CardDeckDetail,
      navigationOptions: {
        headerTitle: 'View Decks'
      },
    },
  })

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
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

