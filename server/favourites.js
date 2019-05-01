const express = require('express')

const db = require('./db/dbFunctions')

const router = express.Router()

router.use(express.json())

router.post('/:songName/:artist/:id', (req, res) => {
    db.addNewFavourite(req.params)
})

router.get('/fetch', (req, res) => {
    return db.listFavourites()
    .then(favourites => res.json(favourites))
})

module.exports = router