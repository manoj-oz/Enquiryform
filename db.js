const { Pool } = require("pg");

const isAzure = process.env.NODE_ENV === "azure";

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: isAzure
    ? { rejectUnauthorized: false } // Azure requires SSL
    : false                         // Local DB doesn't use SSL
});

module.exports = pool;
