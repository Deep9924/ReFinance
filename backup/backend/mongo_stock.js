const axios = require("axios");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_MONGO);
const db = client.db("Refinance").collection("Refinance_Stock");
//const db_test = client.db("Refinance").collection("stock");
client.connect();

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
			
			const basic_financial = `https://finnhub.io/api/v1/stock/metric?symbol=${stockName}&metric=all&token=${process.env.FINHUB_API_KEY}`;
			dataLink = `https://finnhub.io/api/v1/quote?symbol=${stockName}&token=${process.env.FINHUB_API_KEY}`;
			return await getDataApi(dataLink);
		default:
			console.log("Error Occured, Try Again!");
	}
};

// Check if the field exist or not (return 1 if not, 0 if it is)
const checkFieldNotExist = async (stockName, fieldName) => {
	const res = await db.count({ symbol: stockName, [fieldName]: null });
	return res;
};

// Search Data for the fieldName
const searchData = async (stockName) => {
	const res = await db.findOne({ symbol: stockName });
	//console.log("result", res.news.result);
	/* res.news.result.map((res) => {
		if (res.headline.length > 52) {
			res.summary = res.summary.substring(0, 120) + "...";
		}
		if (res.summary.length > 150) {
			res.summary = res.summary.substring(0, 150) + "...";
		}
	}); */
	return res;
	//, { projection: {currency: 1, description: 1}}
};

const updateForNews = async (stockName, fieldName, result) => {
	result.map((res) => {
		if (res.headline.length > 52) {
			res.summary = res.summary.substring(0, 120) + "...";
		}
		if (res.summary.length > 150) {
			res.summary = res.summary.substring(0, 150) + "...";
		}
	});
	await db.updateOne(
		{ symbol: stockName },
		{
			$set: {
				[fieldName]: { result, LastUpdated: new Date(Date.now()) },
			},
		},
		{ upsert: true }
	);
};

const updateForNewsTest = async (stockName, fieldName, result) => {
	await db.updateOne(
		{ symbol: stockName },
		{
			$set: {
				[fieldName]: { result, LastUpdated: new Date(Date.now()) },
			},
		},
		{ upsert: true }
	);
};

const updateForIndex = async (stockName, result) => {
	await db.updateOne(
		{ symbol: stockName },
		{
			$set: {
				percent_change: "1.2%",
				open: "10.00",
				change: "0.01",
				LastUpdated: new Date(Date.now()),
			},
		},
		{ upsert: true }
	);
};

const updateForIndexTest = async (stockName, result) => {
	await db.updateOne(
		{ symbol: stockName },
		{
			$set: {
				percent_change: "1.2%",
				open: "10.00",
				change: "0.01",
				LastUpdated: new Date(Date.now()),
			},
		},
		{ upsert: true }
	);
};

// Update Data if data is less than 5 minutes
const updateData = async (stockName, fieldName) => {
	let result = await findDataApi(stockName, fieldName);
	if (result !== ""){
		switch (fieldName) {
			case "news":
				//console.log("In here")
				await updateForNews(stockName, fieldName, result);
				break;
			case "index":
				await updateForIndex(stockName, result);
				break;
			case "candle":
				await updateForIndex(stockName, result);
				break;
		}
	}
	//result = { ...result, LastUpdated: new Date(Date.now()) };

	const res = await searchData(stockName);

	return res;
};

const getData = async (stockName, fieldName) => {
	const isNotField = await checkFieldNotExist(stockName, fieldName);
	if (isNotField === 1) {
		return await updateData(stockName, fieldName);
	}

	const FIVE_MINUTE_DELAY = 300000;
	const result = await searchData(stockName);
	const LastUpdatedUnix = Math.floor(new Date(result[fieldName].LastUpdated).getTime());
	const fiveMinuteDelayUnix = Math.floor(Date.now() - FIVE_MINUTE_DELAY);

	if (LastUpdatedUnix <= fiveMinuteDelayUnix) {
		return await updateData(stockName, fieldName);
	}

	return result;
};

const searchAllNews = async () => {
	//const news_db = client.db("Refinance").collection("News");
const link = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${process.env.ALPHA_KEY}`
	const res = await getDataApi(link);
	//console.log(res)
	//const res = await db.find({"news.result" : {$exists:true, $nin:[null, "", []]}}, { sort: {"news.result.datetime": -1}, limit: 7, projection: {"news.result": 1, _id: 0}}).toArray();

	//console.log("result", res.news.result);
	/* res.news.result.map((res) => {
		if (res.headline.length > 52) {
			res.summary = res.summary.substring(0, 120) + "...";
		}
		if (res.summary.length > 150) {
			res.summary = res.summary.substring(0, 150) + "...";
		}
	}); */
	return res;
	//, { projection: {currency: 1, description: 1}}
};

const mongo_stock = async (stockName, fieldName) => {
	try {
		if (stockName === undefined){
			const result = await searchAllNews();
			console.log(result)
			return result;
		}
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
