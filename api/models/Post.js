let postsData = require("../data/posts.json");

class Post {
    constructor(data){
        for(let key in data){
            this[key] = data[key];
        }
    }

    static findById(id) {
        try {
            const post = postsData.find(post => post.post_id == id);
            if(!post) throw new Error("Post not found.");
            return post;
        } catch (err) {
            throw new Error(err);
        }
    }

    static create(data){
        try {
            const maxId = Math.max(...postsData.map(post => post.post_id));
            const title = data.title;
            const body = data.body;
            if(!(title && body)) throw new Error("Invalid request body.");
            let newPost = {
                post_id: maxId + 1,
                title: title,
                body: body,
                timestamp: Date.now()
            };
            if(data.name) newPost.name = data.name;
            postsData.push(newPost);
            return newPost;
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = Post;
