import {combineReducers} from 'redux'

import errorMessage from './error-message'
import songList from './songList'

export default combineReducers({
  errorMessage,
  songList
})
