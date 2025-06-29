const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://localhost/school',
});

module.exports = pool;
