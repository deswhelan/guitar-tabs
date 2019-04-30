const express = require('express')

const db = require('./db/dbFunctions')

const router = express.Router()

router.use(express.json())

router.post('/:songName/:artist/:id', (req, res) => {
    db.addNewFavourite(req.params)
    
//   request
//     .get(`http://www.reddit.com/r/${req.params.subreddit}.json`)
//     .end((err, result) => {
//       if (err) {
//         res.status(500).send(err.message)
//       } else {
//         res.json(result.body.data.children)
//       }
//     })
})

module.exports = router