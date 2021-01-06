// Import the mysql package
const mysql = require('mysql2');

// Connect to the ice_creamDB database using a localhost connection
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your MySQL username
  user: 'root',

  // Your MySQL password (leave blank for class demonstration purposes; fill in later)
  password: 'Macanthony26',

  // Name of database
  database: 'employee_tracker',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  connection.end();
});