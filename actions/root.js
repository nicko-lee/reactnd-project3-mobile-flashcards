// ACTION TYPES
export const GET_ALL_DECKS = "GET_ALL_DECKS";
export const GET_DECK = "GET_DECK";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
export const ADD_NEW_DECK = "ADD_NEW_DECK";

// ACTION CREATORS

// so here we are saving all decks to store??
export function getAllDecks (decks) {
    return {
      type: GET_ALL_DECKS,
      decks
    }
  }
  
  export function getDeck (deckId, deckName) {
    return {
      type: GET_DECK,
      deckId,
      deckName
    }
  }
  
  export function addNewDeck (deckName) {
    return {
      type: ADD_NEW_DECK,
      deckName
    }
  }
  
  export function addCardToDeck (deckId, card) {
    return {
      type: ADD_CARD_TO_DECK,
      deckId,
      card
    }
  }

