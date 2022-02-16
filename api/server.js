const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Welcome message
app.get('/', (req, res) => {
    res.json('hello');
});

module.exports = app;
