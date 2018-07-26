import { AsyncStorage } from 'react-native'
import { SEED_STARTER_DECKS } from './seedStarterDecks';

export const APP_DATA = 'APP_DATA'

// export const DECKS_STORAGE_KEY = 'MobileFlashcardsApp:decks'

// export function submitEntry ({ entry, key }) {
//   return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }

// export function removeEntry (key) {
//   return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
//     })
// }

 // fetch the data from mock "DB" and parse (convert from string back into JS array) and then console.log it
export async function fetchData () {
  try {
    const deckData = await AsyncStorage.getItem(APP_DATA);
    console.log(deckData);
    return await JSON.parse(deckData);
  }
  catch(error) {
    console.log(error);
  }
}

// write data to mock "DB" (AsyncStorage)
export function saveData (dataToSave) {
  AsyncStorage.setItem(APP_DATA, JSON.stringify(dataToSave))
} 

// function to reset data to intial seed data
export function resetData () {
  AsyncStorage.setItem(APP_DATA, JSON.stringify(SEED_STARTER_DECKS))
}