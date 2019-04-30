const path = require('path')
const express = require('express')

const server = express()

const redditRoutes = require('./reddit')
const favouritesRoutes = require('./favourites')


server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes)

server.use('/api/favourites', favouritesRoutes)

module.exports = server
