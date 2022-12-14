const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
app.use(cors());
const data = require("./nasdaqD");
const indexScroll = require("./indexScroll");
const pool = require("./database");
require("dotenv").config();

router.get("/", (req, res) => {
  res.send("WHATABYTE: Food For Devs");
});

router.get("/search", (req, res) => {
  const searchInput = req.query.q;

  const newFilter = data.filter((value) => {
    const regex = new RegExp(`^${searchInput}`, "gi");
    return value.Symbol.match(regex) || value.Name.match(regex);
  });

  res.send({ q: newFilter.slice(0, 10) });
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
  const query = await pool.query(
    "SELECT * FROM stock WHERE symbol_ticker = $1",
    [graph_input]
  );
  res.send(query.rows);
});

router.get("/SPX", async (req, res) => {
  const graph_input = "APPL";
  const query = await pool.query(
    "SELECT * FROM stock WHERE symbol_ticker = $1",
    [graph_input]
  );
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
