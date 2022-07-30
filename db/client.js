const { Pool } = require('pg');

const CONNECTION_STRING = process.env.DATABASE_URL || 'http://localhost:5432/ramh';

const client = new Pool({
  connectionString: CONNECTION_STRING,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;
