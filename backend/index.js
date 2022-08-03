const express = require("express");
const path = require("path");
//const path = require('./nasdaqD.json');
const cors = require('cors');
const app = express();
app.use(cors())
const port = process.env.PORT || "5000";


app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
  });

app.get('/search', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'nasdaqD.json'));
})


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});