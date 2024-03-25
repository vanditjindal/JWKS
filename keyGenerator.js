// utils/keyGenerator.js

const jwt = require('jsonwebtoken');

const generateRSAKeyPair = () => {
    const { privateKey, publicKey } = jwt.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'spki', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });
    const kid = Math.random().toString(36).substring(7);
    const expiry = Math.floor(Date.now() / 1000) + 3600;
    return { kid, privateKey, publicKey, expiry };
};

module.exports = { generateRSAKeyPair };
