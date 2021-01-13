async function viewEmp(connection) { 

    console.log("Employee table");
    // const SQL_STATEMENT = `SELECT * FROM employee_tracker.employee;`;
    // const SQL_STATEMENT = `SELECT employee.id,employee.first_name,employee.last_name ,employee.role_id,role.title,role.salary , employee.manager_id, department.name
    // from ((employee
    // inner join role on employee.role_id = role.id)
    // inner join department on role.id = department.id);`;

    const SQL_STATEMENT = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name 
    FROM ((employee, 
    INNER JOIN role on role.id = employee.role_id) 
    LEFT JOIN department ON department.id = role.department_id);`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);        
        console.table(rows);
    }catch (err) {
        console.log(err);    
    
  }

};

async function viewRole(connection) { 

    console.log("Role table");
    const SQL_STATEMENT = `SELECT * FROM employee_tracker.role;`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);      
        console.table(rows);    

    }catch (err) {
        console.log(err); 
    
    }
}

async function viewDept(connection) {

    console.log("Department table");
    const SQL_STATEMENT = `SELECT * FROM employee_tracker.department;`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);      
        console.table(rows);    

    }catch (err) {
        console.log(err); 
    
    }
};

async function addDept(connection, dept) {

    console.log("Department table");
    const SQL_STATEMENT = `INSERT INTO department SET ?`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT [dept]);      
        console.table(rows);    

    }catch (err) {
        console.log(err); 
    
    }
};

async function addEmp(connection, firstName, lastName, roleId, managerId) { 
    
    const SQL_STATEMENT = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?,?,?,?)`; 
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [firstName, lastName, roleId, managerId]);        
        console.table(rows);
    }catch (err) {
        console.log(err);  
        console.log("employee added");  
    
  }

};

async function addRole(connection, title, salary, dept_id) { 
    
    const SQL_STATEMENT = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?);`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [title, salary, dept_id]);      
        console.table(rows);    

    }catch (err) {
        console.log(err); 
        console.log("Role added");
    
    }
};

async function updateEmpRole(connection, role_id, employee_id) {
    
    const SQL_STATEMENT = `UPDATE employee SET role_id = ? WHERE id = ?;`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [role_id, employee_id]);        
        console.table(rows);  

    }catch (err) {
        console.log(err); 
        console.log("Role added");
    
    }
}   

async function updateManager(connection, manager_id, employee_id) {
    
    const SQL_STATEMENT = `UPDATE employee SET manager_id = ? WHERE id = ?;`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT,[manager_id, employee_id]);        
        console.table(rows);  

    }catch (err) {
        console.log(err); 
        console.log("Role added");
    
    }
}   


module.exports = {
    viewEmp,
    viewRole,
    viewDept,
    addDept,
    addEmp,
    addRole,
    updateEmpRole,
    updateManager
}