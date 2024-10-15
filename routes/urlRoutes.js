const express = require('express');
const { shortenURL, getURL, trackClick } = require('../controllers/urlController');
const rateLimit = require('../middlewares/rateLimit');

const router = express.Router();

// URL shortening endpoint
router.post('/shorten', rateLimit, shortenURL);

// URL retrieval endpoint
router.get('/:shortCode', getURL);

// Track clicks endpoint
router.get('/clicks/:shortCode', trackClick);

module.exports = router;
