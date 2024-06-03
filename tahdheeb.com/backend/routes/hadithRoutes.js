const express = require('express');
const HadithController = require('../controllers/hadithController');
const isAuthenticated = require('../middleware/authMiddleware');
const router = express.Router({ mergeParams: true });

router.get('/', HadithController.getAllByChapterId);
router.get('/:hadithId', HadithController.getById);
router.post('/', isAuthenticated, HadithController.create);
router.put('/:hadithId', isAuthenticated, HadithController.update);
router.delete('/:hadithId', isAuthenticated, HadithController.delete);

module.exports = router;
