const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let usersCollection;

async function connectDB() {
    if (!usersCollection) {
        await client.connect();

        const db = client.db("Berserk"); // <-- Apna database name
        usersCollection = db.collection("users");
    }

    return usersCollection;
}

module.exports = connectDB;