import { RECEIVE_DECKS, ADD_DECK } from '../actions'
import data from '../components/data'

function decks (state = {data}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_ENTRY :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default decks