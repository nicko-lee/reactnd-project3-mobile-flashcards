import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from './components/HomeScreen';
import AddNewDeckScreen from './components/AddNewDeckScreen';
import CardDeckDetail from './components/CardDeckDetail';
import { AsyncStorage, TouchableOpacity, Text, View } from 'react-native';
import AddNewCardScreen from './components/AddNewCardScreen';
import { fetchData, saveData, APP_DATA } from './utils/api'
import { SEED_STARTER_DECKS } from './utils/seedStarterDecks';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers/root';
import { getAllDecks } from './reducers/root';
import { connect } from 'react-redux';

export default class App extends React.Component {

  state = {
    refreshState: false,
    appData: {}
  }

  componentDidMount = () => {
      this.initialiseDecks();
}

  refreshState = () => {
    this.state.refreshState === false ? this.setState({refreshState: true}) : this.setState({refreshState: false});
  }

  // initializing the app data if needed  - this checks if it requires initialization
  initialiseDecks = async () => {
    try {
        let decks = await AsyncStorage.getItem(APP_DATA);
        if (decks === null) {
          saveData(SEED_STARTER_DECKS);
        } 
    } catch (error) {
        console.log(error)
    }
  }

  // setup Redux
    defaultStore = createStore(
      rootReducers,
      // this.state.appData
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  render() {
    return (
      <Provider store={this.defaultStore} >
        <Tabs />
      </Provider>
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

