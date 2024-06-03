const express = require('express');
const BookController = require('../controllers/bookController');
const isAuthenticated = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', BookController.getAll);
router.get('/:bookId', BookController.getById);
router.post('/', isAuthenticated, BookController.create);
router.put('/:bookId', isAuthenticated, BookController.update);
router.delete('/:bookId', isAuthenticated, BookController.delete);

module.exports = router;
