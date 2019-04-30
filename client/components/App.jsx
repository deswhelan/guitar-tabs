import React from 'react'

import SearchArtists from './SearchArtists'
import ErrorMessage from './ErrorMessage'
import SongList from './SongList'
import Favourites from './Favourites'

const App = () => (
  <div className='app'>
    <SearchArtists />
    <SongList />
    <Favourites />
    <ErrorMessage />
  </div>
)

export default App
