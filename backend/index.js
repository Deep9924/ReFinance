const express = require("express");
const path = require("path");
const axios = require("axios");
require('dotenv').config();
//const path = require('./nasdaqD.json');
const cors = require('cors');
const app = express();
app.use(cors())
const port = process.env.PORT || "5000";
// 


app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
  });


app.get('/search', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'nasdaqD.json'));
})

app.get('/indices', (req, res) => {
    const lin = `https://api.twelvedata.com/quote?symbol=SPX,IXIC,DJIA,RUT,COMP,BTC/USD,ETH/USD&apikey=${process.env.STOCK_TOKEN}`;
    axios.get(lin)
        .then(response => {
            const dat = response.data;
            res.json(dat);
        }).catch(err => console.log(err));
})

app.get('/index', (req,res) => {
    res.json(val);
})

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

const val = [
    {
      "name": "S&P 500",
      "percent_change": "-0.078%",
      "price": "4151.94",
      "price_change": "-3.23",
      "symbol": "SPX"
    },
    {
      "name": "Nasdaq",
      "percent_change": "0.41%",
      "price": "12720.58",
      "price_change": "52.42",
      "symbol": "IXIC"
    },
    {
      "name": "Dow Jones",
      "percent_change": "-0.26%",
      "price": "32726.82",
      "price_change": "-85.68",
      "symbol": "DJIA"
    },
    {
      "name": "Russel",
      "percent_change": "-0.13%",
      "price": "1906.46",
      "price_change": "-2.47",
      "symbol": "RUT"
    },
    {
      "name": "TSX",
      "percent_change": "0.16%",
      "price": "19577.04",
      "price_change": "31.10",
      "symbol": "TSX"
    },
    {
      "name": "Crude/Oil",
      "percent_change": "1.2%",
      "price": "10.00",
      "price_change": "0.01",
      "symbol": "CL.1"
    },
    {
      "name": "Bitcoin",
      "percent_change": "-0.2%",
      "price": "4500.02",
      "price_change": "-2.3",
      "symbol": "BTC/USD"
    },
    {
      "name": "Ethereum",
      "percent_change": "0.6%",
      "price": "450.00",
      "price_change": "5.3",
      "symbol": "ETH/USD"
    },
    {
      "name": "Nasdaq",
      "percent_change": "0.41%",
      "price": "12720.58",
      "price_change": "52.42",
      "symbol": "COMP"
    },
  ]