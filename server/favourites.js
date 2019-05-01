const express = require('express')

const db = require('./db/dbFunctions')

const router = express.Router()

router.use(express.json())

router.post('/delete/:songName', (req, res) => {
    console.log("made it to delete route!")
    console.log(req.params.songName)

    return db.deleteFavourite(req.params.songName)
    .then(result => console.log(result))
    // return db.listFavourites()
    // .then(favourites => res.json(favourites))
})

router.post('/:songName/:artist/:id', (req, res) => {
    db.addNewFavourite(req.params)
})

router.get('/fetch', (req, res) => {
    return db.listFavourites()
    .then(favourites => res.json(favourites))
})

module.exports = router