import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from './components/HomeScreen';
import AddNewDeckScreen from './components/AddNewDeckScreen';
import CardDeckDetail from './components/CardDeckDetail';
import { AsyncStorage, TouchableOpacity, Text, View } from 'react-native';
import AddNewCardScreen from './components/AddNewCardScreen';
import { fetchData, saveData } from './utils/api'
import { SEED_STARTER_DECKS } from './utils/seedStarterDecks';

export default class App extends React.Component {

  // have option to delete decks and reset all decks

  // have some validation that u cannot have 2 decks of the same title


  componentDidMount = () => {
    // initializing the app data
    saveData(SEED_STARTER_DECKS);
    fetchData();
}

  // check if requires initialization - i.e. if current app data is diff from whats in storage?? hmm 

  
  render() {
    return (
        <Tabs />
        // <View>
        //   <Text>Maoxian</Text>
        //   <TouchableOpacity onPress={this.displayData}>
        //     <Text>Click me to display data</Text>
        //   </TouchableOpacity>
        //   <TouchableOpacity onPress={this.saveData}>
        //     <Text>Click me to save data</Text>
        //   </TouchableOpacity>
        //   <Text>{SEED_STARTER_DECKS[0].title}</Text>
        // </View>
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
    AddNewCard: {
      screen: AddNewCardScreen,
      navigationOptions: {
        headerTitle: 'Add New Card to Deck'
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

