const db = connect("mongodb://localhost:27017/telechart");

db.posts.drop();

db.createCollection("posts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "body", "timestamp"],
            properties: {
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
                    minLength: 1
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
