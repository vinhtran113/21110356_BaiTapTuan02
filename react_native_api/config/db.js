const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'react_native_auth',
  port: 3306
});

db.connect((err) => {
  if (err) throw err;
  console.log('Đã kết nối với MySQL');
});

module.exports = db;
