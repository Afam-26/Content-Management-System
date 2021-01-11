const inquirer = require('inquirer');
const [
    ADD_DEPARTMENT,
    ADD_ROLE,
    ADD_EMPLOYEE,
    VIEW_EMPLOYEES,
    VIEW_DEPARTMENTS,
    VIEW_ROLES,
    UPDATE_EMPLOYEE_ROLES

] = require('.const');

async function promptChoices() {
    try {
        answer = await inquirer.prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                ADD_DEPARTMENT,
                ADD_ROLE,
                ADD_EMPLOYEE,
                VIEW_EMPLOYEES,
                VIEW_DEPARTMENTS,
                VIEW_ROLES,
                UPDATE_EMPLOYEE_ROLES,
                "Exit"
           
            ]
        });
        return answer;    
    }catch (err) {
        console.log(err);
    }
};

async function  addDept() {
     try {
       department = await inquirer.prompt({
            name: "department",
            type: "list",
            message: "What is the name of your department",
            choices: 
            [
              "IT",
              "Legal",
              "Sales",
              "Marketing"
            ]
          });
          return department;
     }catch (err) {
         console.log(err);
     }    

};

async function addRole() {
    try {
        role = await inquirer.prompt([
      {
        name: "title",
        type: "list",
        message: "What is your title?",
        choices:
        [
          "Sr Web Developer",
          "Software Engineer",
          "Sales Manager",
          "Lead Engineer",
          "Marketing Manager"
        ]
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
    ]) 
    return role;
    }catch (err) {
        console.log(err);
    }

};



async function addEmp() {
    try {
        employee = await inquirer.prompt([
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
          ])
          return employee;
    }catch (err) {
        console.log(err);
    } 
    

};


module.exports = {
    promptChoices,
    addDept,
    addRole,
    addEmp
};



