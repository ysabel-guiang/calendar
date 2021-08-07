const express = require('express')
const server = express()

//create middleware

server.get('/', (req, res) => {
  res.send('Hello Word')
})

module.exports = server