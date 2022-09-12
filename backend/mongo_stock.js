/* const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_MONGO);
client.connect();
require("dotenv").config(); */

const db = require("./mongo");

const searchData = async (stockName) => {
	return await db.findOne({ symbol: stockName}, { projection: {currency: 1, description: 1, type: 1}});
	//, { projection: {currency: 1, description: 1}}
};

// Insert Data if data is less than 5 minutes
const insertData = async (stockName, fieldName) => {
	return await db.findOne({ symbol: stockName });
};

// Return -1 if the data is less than 5 in the data or 0 if more
const checkUpdatedData = (fetchedData, fieldName) => {
//	fetchedData
}

const search = async (stockName) => {
	return await db.findOne({ symbol: stockName });
};

const mongo_stock = async (stockName) => {
	try {
		const result = await searchData(stockName);
		console.log("resulting", result)
		return result;
	} catch (error) {
		console.error("error", error);
		return error;
	}
};

module.exports = mongo_stock;
