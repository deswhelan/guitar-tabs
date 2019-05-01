import React from 'react'

import SearchArtists from './SearchArtists'
import ErrorMessage from './ErrorMessage'
import SongList from './SongList'
import Favourites from './Favourites'
import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>
    <SearchArtists />
    <WaitIndicator />
    <div id="songlist-container">
      <SongList />
      <Favourites />
    </div>
    <ErrorMessage />
  </div>
)

export default App
