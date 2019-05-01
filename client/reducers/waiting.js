import {
  SEARCHING,
  RECEIVE_SONGS,
  SHOW_ERROR
} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case SEARCHING:
      return true

    case RECEIVE_SONGS:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
