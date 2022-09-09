const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_MONGO);
client.connect();
require("dotenv").config();

const search = async (stockName) => {
	return await client.db("Refinance").collection("Refinance_Stock").findOne({ symbol: stockName });
};

const mongo_stock = async (stockName) => {
	try {
		const result = await search(stockName);
		return result;
	} catch (error) {
		console.error("error", error);
		return error;
	}
};

module.exports = mongo_stock;
