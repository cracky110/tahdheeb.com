const Book = require('../models/bookModel');

const BookController = {
    getAll: async (req, res) => {
        const books = await Book.getAll();
        res.json(books);
    },
    getById: async (req, res) => {
        const book = await Book.getById(req.params.bookId);
        res.json(book);
    },
    create: async (req, res) => {
        const { title, totalHadith, translatedHadith } = req.body;
        await Book.create(title, totalHadith, translatedHadith);
        res.status(201).json({ message: 'Book created' });
    },
    update: async (req, res) => {
        const { title, totalHadith, translatedHadith } = req.body;
        await Book.update(req.params.bookId, title, totalHadith, translatedHadith);
        res.json({ message: 'Book updated' });
    },
    delete: async (req, res) => {
        await Book.delete(req.params.bookId);
        res.json({ message: 'Book deleted' });
    }
};

module.exports = BookController;
