const express = require('express');
const ReportController = require('../controllers/reportController');
const isAuthenticated = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', ReportController.create);
router.get('/', isAuthenticated, ReportController.getAll);
router.put('/:reportId', isAuthenticated, ReportController.update);
router.delete('/:reportId', isAuthenticated, ReportController.delete);

module.exports = router;
