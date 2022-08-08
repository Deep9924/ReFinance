const fetch = require('node-fetch');

setInterval(() => fetch(`https://<your_app>.herokuapp.com`), 5 * 60 * 1000);