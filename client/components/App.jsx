import React from 'react'

import SearchArtists from './SearchArtists'
import ErrorMessage from './ErrorMessage'
import SongList from './SongList'

const App = () => (
  <div className='app'>
    <SearchArtists />
    <SongList />
    <ErrorMessage />
  </div>
)

export default App
