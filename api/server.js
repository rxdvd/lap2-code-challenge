const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// GET /posts/:id - return json object for a specfic post
app.get('/posts/:id', async (req, res) => {
    
});

// POST /posts - create new post
app.post('/posts', async (req, res) => {
    
});

module.exports = app;
