import {combineReducers} from 'redux'

import errorMessage from './error-message'
import songList from './songList'
import artistName from './artistName'
import favourites from './favourites'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  songList,
  artistName,
  favourites,
  waiting
})
