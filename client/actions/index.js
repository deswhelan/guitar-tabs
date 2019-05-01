import request from 'superagent'

export const RECEIVE_SONGS = 'RECEIVE_SONGS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const SET_ARTIST = 'SET_ARTIST'
export const SET_FAVOURITES = 'SET_FAVOURITES'
export const SEARCHING = 'SEARCHING'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function searchingForSongs () {
  return {
    type: SEARCHING
  }
}

export function fetchArtist (artist) {
  return (dispatch) => {
    dispatch(searchingForSongs())
    return request
      .get(`http://www.songsterr.com/a/ra/songs.json?pattern=${artist}`)
      .then(res => {
        dispatch(receiveSongs(res.body))
        dispatch(setArtistName(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchFavourites () {
  return dispatch => {
    dispatch()
    return request
      .get(`/api/favourites/fetch`)
      .then(response => response.body)
      .then(favourites => dispatch(setFavourites(favourites)))
  }
}

export const receiveSongs = (songList) => {
  return {
    type: RECEIVE_SONGS,
    songList: songList
  }
}

export const setArtistName = (songList) => {
  let artistName = songList[0].artist.name
  return {
    type: SET_ARTIST,
    artistName: artistName
  }
}

export const setFavourites = (favourites) => {
  return {
    type: SET_FAVOURITES,
    favourites
  }
}
