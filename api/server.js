const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

app.all("/*", (req, res) => {
    res.status(404).end();
});

module.exports = app;
