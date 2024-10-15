const redis = require('redis');

const client = redis.createClient({
    socket: {
        host: '127.0.0.1',
        port: 6379
    }
});

(async () => {
    try {
        await client.connect();
        console.log('Connected to Redis...');
    } catch (err) {
        console.error('Redis connection error:', err);
    }
})();

client.on('error', (err) => {
    console.error('Redis error:', err);
});

module.exports = client;
