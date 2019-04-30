import {combineReducers} from 'redux'

import errorMessage from './error-message'
import songList from './songList'
import artistName from './artistName'
import favourites from './favourites'

export default combineReducers({
  errorMessage,
  songList,
  artistName,
  favourites
})
