const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const UserRoutes = require('./Routes/UserRoutes.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});

app.use('/user',UserRoutes);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://adityavikramkirtania2_db_user:n2riwOe7QiwqMqlS@ac-kxnymd5-shard-00-00.kmhshkh.mongodb.net:27017,ac-kxnymd5-shard-00-01.kmhshkh.mongodb.net:27017,ac-kxnymd5-shard-00-02.kmhshkh.mongodb.net:27017/?ssl=true&replicaSet=atlas-309rds-shard-0&authSource=admin&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
