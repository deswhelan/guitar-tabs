import request from 'superagent'

export const FETCH_ARTIST = 'FETCH_ARTIST'
export const RECEIVE_SONGS = 'RECEIVE_SONGS'

export function fetchArtist (artist) {
  console.log("fetching artist");
  return (dispatch) => {
    return request
      .get(`http://www.songsterr.com/a/ra/songs.json?pattern=${artist}`)
      .then(res => {
        dispatch(receiveSongs(res.body))
        console.log(res.body)
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const receiveSongs = (songList) => {
  return {
    type: RECEIVE_SONGS,
    songList: songList
  }
}



// export const SHOW_ERROR = 'SHOW_ERROR'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const REQUEST_POSTS = 'REQUEST_POSTS'

// export const requestPosts = () => {
//   return {
//     type: REQUEST_POSTS
//   }
// }

// export const receivePosts = (posts) => {
//   return {
//     type: RECEIVE_POSTS,
//     posts: posts.map(post => post.data)
//   }
// }

// export const showError = (errorMessage) => {
//   return {
//     type: SHOW_ERROR,
//     errorMessage: errorMessage
//   }
// }

// export function fetchPosts (subreddit) {
//   return (dispatch) => {
//     dispatch(requestPosts())
//     return request
//       .get(`/api/v1/reddit/subreddit/${subreddit}`)
//       .then(res => {
//         dispatch(receivePosts(res.body))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }
