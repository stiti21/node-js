const { Pool } = require('pg');

const pool = new Pool({
  user: 'solaf',
  host: 'localhost',
  database: 'solafdb',
  password: '123456',
  port: 5432,
});


pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL at:', res.rows[0].now);
  }
});

module.exports = pool;
