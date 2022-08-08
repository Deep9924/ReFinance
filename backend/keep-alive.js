const fetch = require('node-fetch');

setInterval(() => fetch(`https://refinanced.herokuapp.com`), 5 * 60 * 1000);