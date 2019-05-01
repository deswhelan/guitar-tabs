const path = require('path')
const express = require('express')

const server = express()

const favouritesRoutes = require('./favourites')

server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/favourites', favouritesRoutes)

module.exports = server
