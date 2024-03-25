// routes/auth.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { generateRSAKeyPair } = require('./keyGenerator');

router.post('/', (req, res) => {
    const { expired } = req.query;
    const { privateKey, expiry } = generateRSAKeyPair();
    const token = jwt.sign({ user: 'exampleUser' }, privateKey, {
        algorithm: 'RS256',
        expiresIn: expired ? '1s' : '1h',
        keyid: Math.random().toString(36).substring(7),
    });
    res.json({ token });
});

module.exports = router;
