const express = require('express')
const cors = require('cors')
const server = express()
const BooksRouter = require('./routes/books');
const NotFound = require('./middlewares/NotFound')
const ServerErrorsHandler = require('./middlewares/ServerErrorsHandler')

server.use(cors({ origin: process.env.WEB_APP_FRONT_ORIGIN }))

server.use(express.json())

const HOST = process.env.HOST
const PORT = process.env.PORT

// Routes 
server.get('/', (req, res) => {
    res.send(`Server is up and running!`);
})

// Books Routes 
server.use('/api/books', BooksRouter);

// (middleware) handle 404 errors with a catch all route
server.use(NotFound)

// (middleware) handle all 500 errors 
server.use(ServerErrorsHandler)


server.listen(PORT, () => {
    console.log(`Server is listening on port ${HOST}:${PORT}`);
})