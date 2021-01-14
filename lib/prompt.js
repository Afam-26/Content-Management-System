// Option menu been imported
const inquirer = require('inquirer');
const [
    ADD_DEPARTMENT,
    ADD_ROLE,
    ADD_EMPLOYEE,
    VIEW_EMPLOYEES,    
    VIEW_DEPARTMENTS,
    VIEW_ROLES,
    UPDATE_EMPLOYEE_ROLES

] = require('./const');

// Option menu prompt
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

// Prompt for adding department
async function  promptAddDept() {
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

// Prompt for adding roles
async function promptAddRole() {
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


// Prompt for adding employee
async function promptAddEmp() {
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

// Prompt for employee update question
async function promptEmpQues() {
  try {
    empUpdate = await inquirer.prompt(
      {
        name: "name",
        type: "list",
        message: "Which employee information would you like to update?",
        choices: [
          "Role ID",
          "Manager ID"
        ]

      }   

    )
    return empUpdate;
  }catch (err) {
    console.log(err);
  }
};

// Prompt for updating employee role
async function promptUpdateEmpRole() {
  try {
    update = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "What is the ID of the employee that you would like to update?"
      },      
    ])
    return update;
  }catch (err) {
    console.log(err);
  }
};

async function promptAddEmpRole() {
  try {
    role = await inquirer.prompt(      
        {
          name: "id",
          type: "input",
          message: "What is the ID of the role you would like to add the employee too?"
        },      
    );
    return role;
  }catch (err) {
    console.log(err);
  }
}

// Prompt for updating manager ID
async function promptUpdateManager() {
  try {
    manager = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "What is the ID of the employee you would like to make this employee manager?"
      }
    ]);
    return manager;
  }catch (err) {
    console.log(err);
  }
};


module.exports = {
    promptChoices,
    promptAddDept,
    promptAddRole,
    promptAddEmp,
    promptUpdateEmpRole,
    promptEmpQues,
    promptUpdateManager,
    promptAddEmpRole
};



