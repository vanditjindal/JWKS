// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Import route handlers
const jwksRoute = require('./routes');
const authRoute = require('./auth');

// Define routes
app.use('/jwks', jwksRoute);
app.use('/auth', authRoute);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the JWKS Server!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
