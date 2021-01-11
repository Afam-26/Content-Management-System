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
  // addRole();
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
      "Add role",
      "Add employee",
      "View employees",
      "View departments",
      "View roles",
      "Update employee roles",
      "Exit"
    ]

     
  })
  .then(function(answer) {
    switch (answer.action) {
      case "Add department":
      addDept();
      break;

      case "Add role":
      addRole();
      break;

      case "Add employee":
      addEmp();
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
      
      case "exit":
        connection.end();
        break;
      
    }
  });
}


function addDept() {
  inquirer.prompt({
    name: "department",
    type: "input",
    message: "What is the name of your department"
  })
  .then(function({department}) {
   
    const SQL_STATEMENT = `INSERT INTO department SET ?`;
    connection.query(SQL_STATEMENT, {name: department}, function(err, res) {
      if(err) throw err;
      console.log("department added");
      startApp();
    });    

  })     

}

function addEmp() {
  
  inquirer.prompt([
    {
      name: "firstName",
      type: "input",
      message: "What is your first name?"
    },

    {
      name: "lastName",
      type: "input",
      message: "What is your last name?"
    },

    {
      name: "roleId",
      type: "input",
      message: "What is your role id?"
    },

    {
      name: "managerId",
      type: "input",
      message: "What is your manager's id?"
    },
  
  ]).then(function({firstName, lastName, roleId, managerId}) {

    const SQL_STATEMENT = `INSERT INTO employee SET ?`; 
    connection.query(SQL_STATEMENT, {first_name: firstName, last_name: lastName, role_id: roleId, manager_id: managerId}, 
    function(err) {
    if(err) throw err;
    console.log("employee added");
    startApp();
  }); 

  }) 
  

}

function addRole() {

  inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is your title?"
    },

    {
      name: "salary",
      type: "input",
      message: "What is your salary?"
    },

    {
      name: "dept_id",
      type: "input",
      message: "What is your department id?"
    }

  ]).then(function({title, salary, dept_id}) {
    const SQL_STATEMENT = `INSERT INTO role SET ?`; 
    connection.query(SQL_STATEMENT, {title: title, salary: salary, department_id: dept_id}, function(err,) {
      if(err) throw err;
      console.log("Role added");
      startApp();

    });

  });

  // inquirer.prompt({
  //   name: "department",
  //   type: "input",
  //   message: "What is the name of your department"
  // })
  // .then(function({department}) {
   
  //   const SQL_STATEMENT = `INSERT INTO department SET ?`;
  //   connection.query(SQL_STATEMENT, {name: department}, function(err, res) {
  //     if(err) throw err;
  //     console.log("department added");
  //     startApp();
  //   });    

  // }) 



}


// Function for viewing employee, role and department

async function viewDept() {

  console.log("Department table");
  const SQL_STATEMENT = `SELECT * FROM employee_tracker.department;`;
  const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
  console.table(rows);
  startApp();
}

async function viewRole() {

  console.log("Role table");
  const SQL_STATEMENT = `SELECT * FROM employee_tracker.role;`;
  const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
  console.table(rows);
  startApp();
}

async function viewEmp() { 

  console.log("Employee table");
  const SQL_STATEMENT = `SELECT * FROM employee_tracker.employee;`;
  const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
  console.table(rows);
  connection.end();
}



