const books = require('express').Router()
const db = require('../models')
const { Book } = db

// GET ALL BOOKS
books.get('/', async (req, res) => {
    try {
        const foundBooks = await Book.findAll()
        res.status(200).json(foundBooks)
    } catch (error) {
        res.status(500).send('Server Error')
        console.log(error)
    }
})

module.exports = books;