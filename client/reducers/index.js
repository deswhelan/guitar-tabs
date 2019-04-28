import {combineReducers} from 'redux'

import errorMessage from './error-message'
import songList from './songList'
import artistName from './artistName'

export default combineReducers({
  errorMessage,
  songList,
  artistName
})
