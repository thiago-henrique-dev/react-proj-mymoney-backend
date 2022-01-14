const port = 3003

const bodyParser = require('body-parser') // vai fazer o parse no corpo da requisição para entregar o objeto pronto
const express = require('express') // require do node
const server = express() // representa meu server

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})