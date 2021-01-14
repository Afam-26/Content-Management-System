// Import the mysql package
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Import Constants Choice Variables
const [ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, VIEW_EMPLOYEES, VIEW_DEPARTMENTS, VIEW_ROLES, UPDATE_EMPLOYEE_ROLES] = require('./lib/const');

// Import Prompt Functions
const {promptChoices, promptAddDept, promptAddRole, promptAddEmp, promptEmpQues, promptUpdateEmpRole, promptUpdateManager, promptAddEmpRole} = require('./lib/prompt');

// Import Query Functions
const {viewEmp, viewRole, viewDept, addDept, addEmp, addRole, updateEmpRole, updateManager} = require('./lib/query');


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
connection.connect(async (err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);  
  await startApp();
  connection.end();
  
});

async function startApp() {

  let answer, employee, role, department, empQues;
  answer = await promptChoices();
  

  switch(answer.action)  {
    case VIEW_EMPLOYEES:
      await viewEmp(connection);
      await startApp();
      break;
    
    case VIEW_DEPARTMENTS:
      await viewDept(connection);
      await startApp();
      break;

    case VIEW_ROLES:
      await viewRole(connection);
      await startApp();
      break;

    case ADD_DEPARTMENT:
      await viewDept(connection);
      department = await promptAddDept();      
      addDept(connection, department.department);
      await viewDept(connection);
      await startApp();
      break;

    case ADD_ROLE:
      await viewRole(connection);
      role = await promptAddRole();
      addRole(connection, role.title, role.salary, role.department_id)
      await viewRole(connection);
      await startApp();
      break;

    case ADD_EMPLOYEE:
      await viewEmp(connection)
      employee = await promptAddEmp();
      addEmp(connection, employee.first_name, employee.last_name, employee.role_id, employee.manager_id);
      await viewEmp(connection);
      await startApp();
      break;

    case UPDATE_EMPLOYEE_ROLES:
      empQues = await promptEmpQues();
      if(empQues.name === "Role ID"){
        await viewEmp(connection);
        employee = await promptUpdateEmpRole();
        await viewRole(connection);
        role = await promptAddEmpRole();
        await updateEmpRole(connection, role.id, employee.id);
        await viewEmp(connection);      
        await startApp();
       
      }
      if(empQues.name === "Manager ID") {
        await viewEmp(connection);
        employee = await promptUpdateEmpRole();
        await viewEmp(connection);        
        manager = await promptUpdateManager();
        await updateManager(connection, manager.id, employee.id)
        await viewEmp(connection);

        await startApp();
        break;

      }
      
  }
};








//   inquirer.prompt({
//     name: "action",
//     type: "list",
//     message: "What would you like to do?",
//     choices: [
//       "Add department",
//       "Add role",
//       "Add employee",
//       "View employees",
//       "View departments",
//       "View roles",
//       "Update employee roles",
//       "Exit"
//     ]

     
//   })
//   .then(function(answer) {
//     switch (answer.action) {
//       case "Add department":
//       addDept();
//       break;

//       case "Add role":
//       addRole();
//       break;

//       case "Add employee":
//       addEmp();
//       break;

//       case "View employees":
//       viewEmp();
//       break;

//       case "View departments":
//         viewDept();
//         break;

//       case "View roles":
//         viewRole();
//         break;

//       case "Update employee roles":
//         updateEmpRole();
//         break;
      
//       case "exit":
//         connection.end();
//         break;
      
//     }
//   });
// }


// function addDept() {
//   inquirer.prompt({
//     name: "department",
//     type: "list",
//     message: "What is the name of your department",
//     choices: 
//     [
//       "IT",
//       "Legal",
//       "Sales",
//       "Marketing"
//     ]
//   })
//   .then(function({department}) {
   
//     const SQL_STATEMENT = `INSERT INTO department SET ?`;
//     connection.query(SQL_STATEMENT, {name: department}, function(err, res) {
//       if(err) throw err;
//       console.log("department added");
//       startApp();
//     });    

//   })     

// }

// function addEmp() {
  
//   inquirer.prompt([
//     {
//       name: "firstName",
//       type: "input",
//       message: "What is your first name?"
//     },

//     {
//       name: "lastName",
//       type: "input",
//       message: "What is your last name?"
//     },

//     {
//       name: "roleId",
//       type: "input",
//       message: "What is your role id?"
//     },

//     {
//       name: "managerId",
//       type: "input",
//       message: "What is your manager's id?"
//     },
  
//   ]).then(function({firstName, lastName, roleId, managerId}) {

//     const SQL_STATEMENT = `INSERT INTO employee SET ?`; 
//     connection.query(SQL_STATEMENT, {first_name: firstName, last_name: lastName, role_id: roleId, manager_id: managerId}, 
//     function(err) {
//     if(err) throw err;
//     console.log("employee added");
//     startApp();
//   }); 

//   }) 
  

// }

// function addRole() {

//   inquirer.prompt([
//     {
//       name: "title",
//       type: "list",
//       message: "What is your title?",
//       choices:
//       [
//         "Sr Web Developer",
//         "Software Engineer",
//         "Sales Manager",
//         "Lead Engineer",
//         "Marketing Manager"
//       ]
//     },

//     {
//       name: "salary",
//       type: "input",
//       message: "What is your salary?"
//     },

//     {
//       name: "dept_id",
//       type: "input",
//       message: "What is your department id?"
//     }

//   ]).then(function({title, salary, dept_id}) {
//     const SQL_STATEMENT = `INSERT INTO role SET ?`; 
//     connection.query(SQL_STATEMENT, {title: title, salary: salary, department_id: dept_id}, function(err,) {
//       if(err) throw err;
//       console.log("Role added");
//       startApp();

//     });

//   });


// }


// // Function for viewing employee, role and department

// async function viewDept() {

//   console.log("Department table");
//   const SQL_STATEMENT = `SELECT * FROM employee_tracker.department;`;
//   const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
//   console.table(rows);
//   startApp();
// }

// async function viewRole() {

//   console.log("Role table");
//   const SQL_STATEMENT = `SELECT * FROM employee_tracker.role;`;
//   const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
//   console.table(rows);
//   startApp();
// }

// async function viewEmp() { 

//   console.log("Employee table");
//   const SQL_STATEMENT = `SELECT * FROM employee_tracker.employee;`;
//   const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
//   console.table(rows);
//   connection.end();
// }

// async function updateEmpRole() {

//   console.log("Employee table");
//   const SQL_STATEMENT = `SELECT * FROM employee_tracker.employee;`;
//   const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
//   console.table(rows);



//   inquirer.prompt({
//     name: "employee",
//     type: "input",
//     message: "Which employee do you want to update their role, enter their firstname?",
//     validate: function(value) {
//       if (value === firstName);
//     }
//   }).then(function(answer) {
//     const SQL_STATEMENT = `INSERT INTO employee SET ?`;

//   })


//   // .then(function({department}) {
   
//   //   const SQL_STATEMENT = `INSERT INTO department SET ?`;
//   //   connection.query(SQL_STATEMENT, {name: department}, function(err, res) {
//   //     if(err) throw err;
//   //     console.log("department added");
//   //     startApp();
//   //   });    

//   // })  

// }


// async function viewEmp() { 

//   console.log("Employee table");
//   const SQL_STATEMENT = `SELECT * FROM employee_tracker.employee;`;
//   const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
    
//   console.table(rows);
//   connection.end();
// }
