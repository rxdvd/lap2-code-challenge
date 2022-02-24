const db = connect("mongodb://localhost:27017/telechart");

db.posts.drop();

db.createCollection("posts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["post_id", "title", "body", "timestamp"],
            properties: {
                post_id:{
                    bsonType: "number",
                    title: "post identifier",
                    description: "must be a number greater than 0 and is required",
                    minimum: 1
                },
                title: {
                    bsonType: "string",
                    title: "title of post",
                    description: "must be a string and is required",
                    minLength: 1
                },
                name: {
                    bsonType: "string",
                    title: "optional pseudonym",
                    description: "must be a string",
                    minLength: 1
                },
                body: {
                    bsonType: "string",
                    title: "post body",
                    description: "must be a string and is required",
                    minLength: 1, maxLength: 300
                },
                timestamp: {
                    bsonType: "number",
                    title: "time of post as unix",
                    description: "must be a non-negative number and is required",
                    minimum: 0
                }
            }
        }
    }
});
