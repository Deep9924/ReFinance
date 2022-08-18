const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL
const pool = new Pool(
    process.env.DATABASE_URL
);

module.exports = pool;