const init = require("../dbConfig/init");

class Post {
    constructor(data){
        for(let key in data){
            this[key] = data[key];
        }
    }

    static findById(id) {
        return new Promise( async (resolve, reject) => {
            try {
                if(!id) throw new Error("No post id is specified.");

                const db = await init();
                const postsData = await db.collection("posts").find({
                    post_id: parseInt(id)
                }).toArray();

                if(!postsData.length) throw new Error("Post not found.");

                const post = new Post(postsData[0]);
                resolve(post);
            } catch (err) {
                reject(err);
            }
        });
    }

    static create(data){
        return new Promise( async (resolve, reject) => {
            try {
                const title = data.title;
                const body = data.body;
                if(!(title && body)) throw new Error("Invalid request body.");

                const db = await init();
                const sortedPosts = await db.collection("posts").find().sort({
                    post_id: -1
                }).toArray();

                const newId = sortedPosts.length ? sortedPosts[0].post_id + 1 : 1;
                let newPost = {
                    post_id: newId,
                    title: title,
                    body: body,
                    timestamp: Date.now()
                };
                if(data.name) newPost.name = data.name;

                await db.collection("posts").insertOne(newPost);

                resolve(newPost);
            } catch (err) {
                reject(err);
            }
        });
    }
}

module.exports = Post;
