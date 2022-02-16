const request = require("supertest");
const { MongoClient } = require("mongodb");

const testSeed = require("./testSeed.json");

async function initDatabase(){
    return new Promise( async (resolve, reject) => {
        try {
            let client = await MongoClient.connect(process.env.DB_CONNECTION_URI);
            const db = await client.db(process.env.DB_NAME);

            const collections = await db.listCollections()
                                        .toArray();

            const exists = collections.map(c => c.name).includes("posts");

            if(exists) {
                await db.collection("posts").drop();
            }

            await db.collection("posts").insertMany(testSeed);
            resolve(await client.close());
        } catch (err) {
            reject(err);
        }
    });
}

global.request = request;
global.app = require("../server");
global.initDatabase = initDatabase;
global.port = process.env.PORT || 5000;
