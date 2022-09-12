const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_MONGO);
client.connect();
require("dotenv").config();

const db = client.db("Refinance").collection("Refinance_Stock");


module.exports = db;