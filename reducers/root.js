import {
    GET_ALL_DECKS,
    GET_DECK,
    ADD_CARD_TO_DECK,
    ADD_NEW_DECK,
} from '../actions/root';
import { combineReducers } from 'redux';

// REDUCERS

export const appReducer = (state = {}, action) => {

    switch (action.type) {
  
      case GET_ALL_DECKS :
        return {
          ...action.decks
        }
  
      case GET_DECK :
        return {
          [action.deckId]: action.deckName
        }
  
      case ADD_NEW_DECK :
        return {
          ...state,
            [action.deckName.replace(/\s+/g, '')]: {
              title:action.deckName,
              questions: []
            }
        }
  
      case ADD_CARD_TO_DECK :
        const a = {...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [...state[action.deckId].questions, action.card] // append to the array an extra card. Careful cos u access it by .questions not .card which caused some errors
        }}
        console.log("From inside root reducer", a)
        return {
          ...state,
            [action.deckId]: {
              ...state[action.deckId],
              questions: [...state[action.deckId].questions, action.card] // append to the array an extra card. Careful cos u access it by .questions not .card which caused some errors
            }
        }
  
      default :
        return state
    }
  }

// ALL COMES TOGETHER HERE - THIS IS YOUR "STORE"
export default combineReducers({
    appData: appReducer
});

