// Import the mysql package
const mysql = require('mysql2');
const inquirer = require('inquirer');

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

// Function for server connection
connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  // addDept();
  // addEmp();
  // viewDept();
  // viewRole();
  // viewEmp();
  startApp();
  // connection.end();
  
});

function startApp() {

  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Add department",
      "Ddd role?",
      "Ddd employee?",
      "View employees",
      "View departments",
      "View roles",
      "Update employee roles",
      "exit"
    ]

     
  })
  .then(function(answer) {
    switch (answer.action) {
      case "Add departments":
      addDept();
      break;

      case "Add role":
      addDept();
      break;

      case "Add employee":
      addDept();
      break;

      case "View employees":
      viewEmp();
      break;

      case "View departments":
        viewDept();
        break;

      case "View roles":
        viewRole();
        break;

      case "Update employee roles":
        updateEmpRole();
        break;
      
    }
  });
}


// async function addDept() {
//   inquirer.prompt({
//     name: ""



//   })



//     const SQL_STATEMENT = `INSERT INTO department (name) 
//     VALUES ("Legal"), `;
//     const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
//     console.log(rows);
    

// }

// async function addEmp() {

//   const SQL_STATEMENT = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
//   VALUES ("Ifunanya", "Anekeh", 13, 3); `;
//   const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
  
//   console.log("it added again");
  

// }


// Function for viewing employee, role and department

async function viewDept() {

  console.log("Department table");
  const SQL_STATEMENT = `SELECT * FROM employee_tracker.department;`;
  const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
  console.table(rows);
}

async function viewRole() {

  console.log("Role table");
  const SQL_STATEMENT = `SELECT * FROM employee_tracker.role;`;
  const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
  console.table(rows);
}

async function viewEmp() { 

  console.log("Employee table");
  const SQL_STATEMENT = `SELECT * FROM employee_tracker.employee;`;
  const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
  console.table(rows);
  connection.end();
}


// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }
