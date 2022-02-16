const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let postsData = require("./data/posts.json");

// GET /posts/:id - return json object for a specfic post
app.get('/posts/:id', async (req, res) => {
    try {
        const post = postsData.find(post => post.post_id == req.params.id);
        if(!post) throw new Error("Post not found.");
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({
            error: err.message
        });
    }
});

// POST /posts - create new post
app.post('/posts', async (req, res) => {
    try {
        const maxId = Math.max(...postsData.map(post => post.post_id));
        const title = req.body.title;
        const body = req.body.body;
        if(!(title && body)) throw new Error("Invalid request body.");
        let newPost = {
            post_id: maxId + 1,
            title: title,
            body: body,
            timestamp: Date.now()
        };
        if(req.body.name) newPost.name = req.body.name;
        postsData.push(newPost);
        res.status(201).json(newPost);
    } catch (err) {
        res.status(422).json({
            error: err.message
        });
    }
});

module.exports = app;
