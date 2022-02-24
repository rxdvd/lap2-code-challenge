const init = require("./init");
const postsData = require("../data/posts.json");

async function seedDatabase(){
    let exitCode = 0;
    try {
        const db = await init();
        await db.collection("posts").insertMany(postsData);
        console.log("dev database seeded");
    } catch (err) {
        console.log(err);
        exitCode = 1;
    } finally {
        process.exit(exitCode);
    }
}

seedDatabase();
