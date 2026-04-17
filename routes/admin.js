const express = require('express');
const adminController = require('../controllers/adminController');
const { verifyAdmin } = require('../middleware/auth');

const router = express.Router();

router.get('/dashboard', verifyAdmin, adminController.getDashboardStats);
router.get('/users', verifyAdmin, adminController.getAllUsers);
router.get('/analytics', verifyAdmin, adminController.getConsentAnalytics);
router.get('/audit-logs', verifyAdmin, adminController.getAuditLogs);

module.exports = router;