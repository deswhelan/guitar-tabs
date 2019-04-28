import React from 'react'

import SearchArtists from './SearchArtists'
import ErrorMessage from './ErrorMessage'

const App = () => (
  <div className='app'>
    <SearchArtists />
    <ErrorMessage />
  </div>
)

export default App
