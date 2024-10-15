const client = require('../config/redisConfig');
const { nanoid } = require('nanoid');

// Shorten a URL
exports.shortenURL = async (req, res) => {
    const { originalUrl } = req.body;

    // Generate a short code
    const shortCode = nanoid(6);

    // Store in Redis with expiration (optional)
    await client.set(shortCode, originalUrl, {
        EX: 3600, // expires in 1 hour
    });

    res.json({ shortCode, originalUrl });
};

// Get original URL
exports.getURL = async (req, res) => {
    const { shortCode } = req.params;
    const originalUrl = await client.get(shortCode);

    if (!originalUrl) {
        return res.status(404).json({ error: 'Short code not found' });
    }

    res.json({ originalUrl });
};

// Track clicks
exports.trackClick = async (req, res) => {
    const { shortCode } = req.params;
    const originalUrl = await client.get(shortCode);

    if (!originalUrl) {
        return res.status(404).json({ error: 'Short code not found' });
    }

    // Increment click count logic here (if needed)
    // For example: client.incr(`clicks:${shortCode}`);

    res.json({ originalUrl });
};
