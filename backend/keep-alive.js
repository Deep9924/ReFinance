const fetch = require('node-fetch');
// setInterval(async() => await fetch(`https://refinanced.herokuapp.com`), 5 * 60 * 1000);
setInterval(() => fetch(`https://refinanced.herokuapp.com`), 5 * 60 * 1000);