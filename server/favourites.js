const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    console.log("API request made it through routes!!")
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