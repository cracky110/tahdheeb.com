const express = require('express');
const ChapterController = require('../controllers/chapterController');
const isAuthenticated = require('../middleware/authMiddleware');
const router = express.Router({ mergeParams: true });

router.get('/', ChapterController.getAllByBookId);
router.get('/:chapterId', ChapterController.getById);
router.post('/', isAuthenticated, ChapterController.create);
router.put('/:chapterId', isAuthenticated, ChapterController.update);
router.delete('/:chapterId', isAuthenticated, ChapterController.delete);

module.exports = router;
