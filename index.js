const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const searchRoutes = require('./source/routes/search');
app.use('/search', searchRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
