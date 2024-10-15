const rateLimit = require('express-rate-limit');

// Rate limit middleware to limit requests to 3 per minute
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 3, // limit each IP to 3 requests per windowMs
    message: { error: 'Too many requests, please try again later.' },
});

module.exports = limiter;
