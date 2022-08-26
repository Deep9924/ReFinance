
const localURL = process.env.REACT_APP_LOCAL;

exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify({ localURL }),
			};
	};


/* 
const handler = async (event) => {
	const localURL = process.env.REACT_APP_LOCAL;
	return {
		statusCode: 200,
		body: localURL,
	};
};

module.export = { handler }; */

/* const axios = require("axios");
const localURL = process.env.REACT_APP_LOCAL;
// require("dotenv").config();

exports.handler = async function (event, context) {
	axios.get(localURL + `search?q=${searchWord}`).then((value) => {
		searchWord === "" ? setfilteredData([]) : setfilteredData(value.data.q);
	});
	return {
		statusCode: 200,
		body: JSON.stringify({ message: "hello World" }),
	};
};

router.get("/search", (req, res) => {
	const searchInput = req.query.q;

	const newFilter = data.filter((value) => {
		const regex = new RegExp(`^${searchInput}`, "gi");
		return value.Symbol.match(regex) || value.Name.match(regex);
	});

	res.send({ q: newFilter.slice(0, 10) });
});

router.get("/", (req, res) => {
	res.send("WHATABYTE: Food For Devs");
});

router.get("/indices", (req, res) => {
	const symbol_quote = `https://api.twelvedata.com/quote?symbol=SPX,IXIC,DJIA,RUT,COMP,BTC/USD,ETH/USD&apikey=${process.env.STOCK_TOKEN}`;
	axios
		.get(symbol_quote)
		.then((response) => {
			const data = response.data;
			res.json(data);
		})
		.catch((err) => console.log(err));
});

router.get("/index", (req, res) => {
	res.json(indexScroll);
});

router.get("/graph", async (req, res) => {
	const graph_input = req.query.id;
	const query = await pool.query("SELECT * FROM stock WHERE symbol_ticker = $1", [graph_input]);
	res.send(query.rows);
});

router.get("/SPX", async (req, res) => {
	const graph_input = "APPL";
	const query = await pool.query("SELECT * FROM stock WHERE symbol_ticker = $1", [graph_input]);
	res.send(query.rows);
});

router.get("/db", (req, res) => {
	//pool.query("INSERT INTO links (url, name) VALUES('helloasd','O''Reilly Media');")
	pool.query("SELECT	* FROM stock;", (error, response) => {
		res.send(response.rows);
	});
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
 */
