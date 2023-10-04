const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'mysql-server', // Use the MySQL container name as the host
  user: 'root',
  password: 'my-secret-pw', // Set your MySQL root password here
  database: 'mydb', // Change to your desired database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }

  console.log('Connected to MySQL as ID:', connection.threadId);

  // Perform a simple query
  connection.query('SELECT 1 + 1 AS solution', (queryErr, results) => {
    if (queryErr) throw queryErr;

    console.log('MySQL Query Result:', results[0].solution);

    // Close the MySQL connection
    connection.end((endErr) => {
      if (endErr) console.error('Error closing MySQL connection:', endErr);
      else console.log('MySQL connection closed.');
    });
  });
});
