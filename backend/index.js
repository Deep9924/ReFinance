const express = require("express");
// const path = require('path');
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || "5000";
//const data = require("./nasdaqD");
const indexScroll = require("./indexScroll");
const pool = require("./database");
require("dotenv").config();
require("./keep-alive");

const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_MONGO);
client.connect();
const mongo_db = require("./mongo_search");
const mongo_stock = require("./mongo_stock");

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "<API_key>"; // Replace this
const finnhubClient = new finnhub.DefaultApi();
// https://www.npmjs.com/package/finnhub

app.get("/test", async (req, res) => {
	//const sy = "AAPL";
	const result = await mongo_stock(req.query.id, "Search");
	console.log("result", result)
	return res.send(result);
	//mongo_stock("MSFT", );


})


app.get("/", (req, res) => {
	res.status(200).send("WHATABYTE: Food For Devs");
});

app.get("/search", async (req, res) => {
	const result = await mongo_db(req.query.q);
	return res.send({ q: result });
});

app.get("/news", (req, res) => {
	const link = "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2022-08-01&to=2022-08-31&token=cc7sokqad3i03farbm4g";
	//const symbol_quote = `https://api.twelvedata.com/quote?symbol=SPX,IXIC,DJIA,RUT,COMP,BTC/USD,ETH/USD&apikey=${process.env.STOCK_TOKEN}`;
	axios
		.get(link)
		.then((response) => {
			const data = response.data;
			res.json(data);
		})
		.catch((err) => console.log(err));
});

app.get("/indices", (req, res) => {
	const symbol_quote = `https://api.twelvedata.com/quote?symbol=SPX,IXIC,DJIA,RUT,COMP,BTC/USD,ETH/USD&apikey=${process.env.STOCK_TOKEN}`;
	axios
		.get(symbol_quote)
		.then((response) => {
			const data = response.data;
			res.json(data);
		})
		.catch((err) => console.log(err));
});

// Change from index to indices and add to database
app.get("/index", (req, res) => {
	res.json(indexScroll);
});

app.get("/graph", async (req, res) => {
	const graph_input = req.query.id;
	const query = await pool.query("SELECT * FROM stock WHERE symbol_ticker = $1", [graph_input]);

	//console.log(l.rows)
	res.send(query.rows);
});

app.get("/SPX", async (req, res) => {
	const graph_input = "APPL";
	const query = await pool.query("SELECT * FROM stock WHERE symbol_ticker = $1", [graph_input]);

	//console.log(l.rows)
	res.send(query.rows);
});

app.get("/SPXA", async (req, res) => {
	/*   const graph_input = 'APPL';
  const query = await pool.query("SELECT * FROM stock WHERE symbol_ticker = $1", [graph_input]);
 */
	//console.log(l.rows)
	//res.send(query.rows);

	const symbol_quote = `https://api.twelvedata.com/complex_data?apikey=${process.env.STOCK_TOKEN}`;
	const head = {
		"Content-Type": "application/json",
	};
	const data = {
		symbols: ["AAPL"],
		intervals: ["5min", "1day"],
		outputsize: 25,
		methods: [
			"time_series",
			{
				name: "ema",
				time_period: 12,
			},
			"quote",
			{
				name: "adx",
				order: "ASC",
			},
		],
	};

	axios
		.post(symbol_quote, data, head)
		.then((response) => {
			/* console.log("this is response: ", response);
        const data = response.data; */
			res.json(response);
			console.log("this is data: ", response.data);
		})
		.catch((err) => console.log(err));
});

app.get("/db", (req, res) => {
	pool.query("SELECT	* FROM stock;", (error, response) => {
		res.send(response.rows);
	});
});

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});

// db.Refinance_Stock.updateMany({description: ""}, {$set: {description}})

/* 
  app.get("/mongo_auto", async (req, res) => {
    //res.send(result);
    try {
      if (req.query.q) {
        let result = await client
          .db("Refinance")
          .collection("Refinance_Stock")
          .aggregate([
            {
              $search: {
                index: "autocomplete",
                autocomplete: {
                  query: req.query.q,
                  path: ["symbol", "description" ],
                  fuzzy: {
                    maxEdits: 1,
                  },
                  tokenOrder: "sequential",
                },
              },
            },
            {
              $limit: 10,
            },
          ])
          .toArray();

        return res.send(result);
      }
      res.send([]);
    } catch (error) {
      console.error(error);
      res.send([]);
    }
  });
 */


	/* app.get("/searched", (req, res) => {
	const searchInput = req.query.q;

	const newFilter = data.filter((value) => {
		const regex = new RegExp(`^${searchInput}`, "gi");
		return value.Symbol.match(regex) || value.Name.match(regex);
	});

	res.send({ q: newFilter.slice(0, 10) });
}); */