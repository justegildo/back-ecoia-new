const { Client } = require('pg');
 
const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'ecoia_db',
  password: 'postgres',
  port: 5438
});

db.connect();

module.exports = db;