const config = require('../../knexfile').development
const db = require('knex')(config)

function listFavourites () {
    return db('favourites')
    .select()
}

function addNewFavourite (newFavInfo) {
    let {songName, artist, id} = newFavInfo

    return db('favourites')
    .insert({
        song_name: songName,
        artist_name: artist,
        url: `https://www.songsterr.com/a/wa/song?id=${id}`
    })
    .then(() => {})
}

module.exports = {
    listFavourites,
    addNewFavourite
}