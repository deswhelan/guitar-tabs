import request from 'superagent'

function addToFavourites(song, artist, url) {
    console.log("adding to favourites!", song, artist, url)
    // Call the Emoji API
    return request.get('/api/favourites')
    // Process the response, and extract the data
    .then(res => res.body)
    // Handle an API error
    .catch(err => {
        // eslint-disable-next-line no-console
        console.error('Could not add to favourites', err)
  })
}

export default addToFavourites