const express = require("express");
// const path = require("path");
const axios = require("axios");
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || "5000";
const data = require("./nasdaqD");
const indexScroll = require("./indexScroll");
const pool = require('./database');
require('dotenv').config();
require('./keep-alive');


app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
  });

app.get('/search',  (req, res) => {
  const searchInput = req.query.q;

  const newFilter = data.filter((value) => {
    const regex = new RegExp(`^${searchInput}`, 'gi');
    return value.Symbol.match(regex) || value.Name.match(regex);
  });

  res.send({q: newFilter.slice(0, 10)});
});

app.get('/indices', (req, res) => {
    const lin = `https://api.twelvedata.com/quote?symbol=SPX,IXIC,DJIA,RUT,COMP,BTC/USD,ETH/USD&apikey=${process.env.STOCK_TOKEN}`;
    axios.get(lin)
        .then(response => {
            const data = response.data;
            res.json(data);
        }).catch(err => console.log(err));
})

app.get('/index', (req,res) => {
    res.json(indexScroll);
})

app.get('/db', (req, res) => {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  });
  
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

