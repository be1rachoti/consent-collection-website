const express = require('express');
const consentController = require('../controllers/consentController');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

router.post('/', verifyToken, consentController.submitConsent);
router.get('/', verifyToken, consentController.getUserConsents);
router.patch('/:consentId', verifyToken, consentController.updateConsentStatus);
router.delete('/:consentId', verifyToken, consentController.withdrawConsent);

module.exports = router;