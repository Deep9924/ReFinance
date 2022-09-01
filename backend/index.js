const express = require('express');
// const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || '5000';
const data = require('./nasdaqD');
const indexScroll = require('./indexScroll');
const graph_data = require('./graph_data');
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

app.get('/my', (req, res) => {
  const link = 'https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2022-08-01&to=2022-08-31&token=cc7sokqad3i03farbm4g';
  //const symbol_quote = `https://api.twelvedata.com/quote?symbol=SPX,IXIC,DJIA,RUT,COMP,BTC/USD,ETH/USD&apikey=${process.env.STOCK_TOKEN}`;
  axios.get(link)
      .then(response => {
          const data = response.data;
          res.json(data);
      }).catch(err => console.log(err));
})


app.get('/indices', (req, res) => {
    const symbol_quote = `https://api.twelvedata.com/quote?symbol=SPX,IXIC,DJIA,RUT,COMP,BTC/USD,ETH/USD&apikey=${process.env.STOCK_TOKEN}`;
    axios.get(symbol_quote)
        .then(response => {
            const data = response.data;
            res.json(data);
        }).catch(err => console.log(err));
})

app.get('/index', (req,res) => {
    res.json(indexScroll);
})

app.get('/graph',  async(req, res) => {
  const graph_input = req.query.id;
  const query = await pool.query("SELECT * FROM stock WHERE symbol_ticker = $1", [graph_input]);

  //console.log(l.rows)
  res.send(query.rows);
});

app.get('/SPX',  async(req, res) => {
  const graph_input = 'APPL';
  const query = await pool.query("SELECT * FROM stock WHERE symbol_ticker = $1", [graph_input]);

  //console.log(l.rows)
  res.send(query.rows);
});

app.get('/SPXA',  async(req, res) => {
/*   const graph_input = 'APPL';
  const query = await pool.query("SELECT * FROM stock WHERE symbol_ticker = $1", [graph_input]);
 */
  //console.log(l.rows)
  //res.send(query.rows);

  const symbol_quote = `https://api.twelvedata.com/complex_data?apikey=${process.env.STOCK_TOKEN}`;
  const head = {
    "Content-Type": "application/json"
  };
  const data = {
    "symbols": [
        "AAPL"
    ],
    "intervals": [
        "5min",
        "1day"
    ],
    "outputsize": 25,
    "methods": [
        "time_series",
        {
            "name": "ema",
            "time_period": 12
        },
        "quote",
        {
            "name": "adx",
            "order": "ASC"
        }
    ]
};

  axios.post(symbol_quote, data, head)
      .then(response => {
        /* console.log("this is response: ", response);
        const data = response.data; */
        res.json(response);
        console.log("this is data: ", response.data);
      }).catch(err => console.log(err));

});


/* app.get('/gp', (req,res) => {
  res.json(graph_data);
})  */

app.get('/db', (req, res) => {
 //pool.query("INSERT INTO links (url, name) VALUES('helloasd','O''Reilly Media');")
  pool.query('SELECT	* FROM stock;', (error, response) => {
    //console.log( response.rows);
    res.send(response.rows);
  })
});


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

