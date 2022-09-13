const axios = require("axios");
const db = require("./mongo");
require("dotenv").config();

const getDataApi = async (link) => {
	return await axios
		.get(link)
		.then((response) => {
			//console.log("res", response.data);
			return response.data;
		})
		.catch((err) => console.log(err));
};

const findDataApi = async (stockName, fieldName) => {
	let dataLink = "";

	switch (fieldName) {
		case "news":
			//${process.env.FINHUB_API_KEY};
			let startDate = new Date(Date.now() - 604800).toISOString().slice(0, 10);
			let endDate = new Date().toISOString().slice(0, 10);
			dataLink = `https://finnhub.io/api/v1/company-news?symbol=${stockName}&from=${startDate}&to=${endDate}&token=${process.env.FINHUB_API_KEY}`;
			return await getDataApi(dataLink);
		case "index":
			dataLink = `https://api.twelvedata.com/quote?symbol=SPX,IXIC,DJIA,RUT,COMP,BTC/USD,ETH/USD&apikey=${process.env.STOCK_TOKEN}`;
			return await getDataApi(dataLink);
		case "candle":
			// for five days = 432000 = 60*60*24*5
			const startDates = Math.floor(Date.now() / 1000 - 432000);
			const endDates = Math.floor(Date.now() / 1000);

			dataLink = `https://finnhub.io/api/v1/stock/candle?symbol=${stockName}&resolution=5&from=${startDates}&to=${endDates}&token=${process.env.FINHUB_API_KEY}`;
			return await getDataApi(dataLink);
		case "info":
			const another = "https://finnhub.io/api/v1/stock/price-metric?symbol=AAPL&token=${process.env.FINHUB_API_KEY}";
			const basic_financial = "https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=${process.env.FINHUB_API_KEY}";
			dataLink = `https://finnhub.io/api/v1/quote?symbol=${stockName}&token=${process.env.FINHUB_API_KEY}`;
			return await getDataApi(dataLink);
		default:
			console.log("Error Occured, Try Again!");
	}
};

// Check if the field exist or not (return 1 if not, 0 if it is)
const checkFieldNotExist = async (stockName, fieldName) => {
	return await db.count({ symbol: stockName, [fieldName]: null });
};

// Search Data for the fieldName
const searchData = async (stockName, fieldName) => {
	return await db.findOne({ symbol: stockName });
	//, { projection: {currency: 1, description: 1}}
};

// Update Data if data is less than 5 minutes
const updateData = async (stockName, fieldName) => {
	let result = await findDataApi(stockName, fieldName);
	//result = { ...result, LastUpdated: new Date(Date.now()) };
	await db.updateOne(
		{ symbol: stockName },
		{
			$set: {
				[fieldName]: { result, LastUpdated: new Date(Date.now()) },
			},
		},
		{ upsert: true }
	);
	return await searchData(stockName, fieldName);
};

const getData = async (stockName, fieldName) => {
	const isNotField = await checkFieldNotExist(stockName, fieldName);
	if (isNotField === 1) {
		return await updateData(stockName, fieldName);
	}

	const FIVE_MINUTE_DELAY = 300000;
	const result = await searchData(stockName, fieldName);
	const LastUpdatedUnix = Math.floor(new Date(result[fieldName].LastUpdated).getTime());
	const fiveMinuteDelayUnix = Math.floor(Date.now() - FIVE_MINUTE_DELAY);

	if (LastUpdatedUnix <= fiveMinuteDelayUnix) {
		return await updateData(stockName, fieldName);
	}

	return result;
};

const mongo_stock = async (stockName, fieldName) => {
	fieldName = "news";

	try {
		const result = await getData(stockName, fieldName);
		return result;
	} catch (error) {
		console.error("error", error);
		return error;
	}
};

module.exports = mongo_stock;

/* // Check if the field exist or not (return 1 if not, 0 if it is)
const checkFieldNotExist = async (stockName, fieldName) => {
	return await db.count({ symbol: stockName, [fieldName]: null });
	//db.inventory.find( { qty: { $exists: true, $nin: [ 5, 15 ] } } )
}; 

// Insert Data if data does not exist
const insertData = async (stockName, fieldName) => {
	const result = await findDataApi(stockName, fieldName);
	await db.updateOne({ symbol: stockName }, { $set: { [fieldName]: result } }, { upsert: true });
	return await searchData(stockName, fieldName);
};
 */
