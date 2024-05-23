const express = require('express');
const router = express.Router();
const client = require('../db/db');

// Index a document
router.post('/index', async (req, res) => {
    try {
        const { index, id, body } = req.body;
        const response = await client.index({
            index,
            id,
            body
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Search documents
router.post('/', async (req, res) => {
    try {
        const { index, query } = req.body;
        const response = await client.search({
            index,
            body: {
                query: {
                    match: query
                }
            }
        });
        res.json(response.hits.hits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
