// routes/jwks.js

const express = require('express');
const router = express.Router();
const { generateRSAKeyPair } = require('./keyGenerator');

router.get('/', (req, res) => {
    const { kid, publicKey, expiry } = generateRSAKeyPair();
    const jwks = {
        keys: [
            {
                alg: 'RS256',
                kty: 'RSA',
                use: 'sig',
                kid,
                nbf: Math.floor(Date.now() / 1000),
                exp: expiry,
                e: 'AQAB',
                n: publicKey,
            },
        ],
    };
    res.json(jwks);
});

module.exports = router;
