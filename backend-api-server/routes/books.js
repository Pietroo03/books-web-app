const express = require('express');
const router = express.Router();

const BookController = require('../controllers/BookController.js')


// Get all books 

router.get('/', BookController.index);

// Get a single book

router.get('/:id', BookController.show)


module.exports = router;