require('dotenv').config();
const { Pool } = require('pg');

// Switch between local and Azure DB
const isAzure = process.env.NODE_ENV === "azure";

const pool = new Pool({
  host: isAzure ? process.env.AZURE_DB_HOST : process.env.LOCAL_DB_HOST,
  user: isAzure ? process.env.AZURE_DB_USER : process.env.LOCAL_DB_USER,
  password: isAzure ? process.env.AZURE_DB_PASSWORD : process.env.LOCAL_DB_PASSWORD,
  database: isAzure ? process.env.AZURE_DB_NAME : process.env.LOCAL_DB_NAME,
  port: isAzure ? process.env.AZURE_DB_PORT : process.env.LOCAL_DB_PORT,
  ssl: isAzure ? { rejectUnauthorized: false } : false
});

module.exports = pool;
