const request = require('supertest');
const app = require('./server'); // Assuming your server file is named app.js

describe('JWKS Server', () => {
    test('GET /jwks should return public keys in JWKS format', async () => {
        const response = await request(app).get('/jwks');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('keys');
        // Add more assertions to check the format of the JWKS response
    });

    test('POST /auth should return a JWT token', async () => {
        const response = await request(app)
            .post('/auth')
            .send({ /* Add any required request body data here */ });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
        // Add more assertions to validate the JWT token
    });

    test('POST /auth with expired query parameter should return JWT token with expired key', async () => {
        const response = await request(app)
            .post('/auth?expired=true')
            .send({ /* Add any required request body data here */ });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
        // Add more assertions to validate the JWT token issued with expired key
    });
});
