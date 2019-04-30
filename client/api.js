import request from 'superagent'

export function addToFavourites(songName, artist, id) {
   
    // Call the favourites API
    return request.post(`/api/favourites/${songName}/${artist}/${id}`)
    // Process the response, and extract the data
    .then(res => res.body)
    // Handle an API error
    .catch(err => {
        // eslint-disable-next-line no-console
        console.error('Could not add to favourites', err)
  })
}



