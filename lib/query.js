// Function and query to view all employees
async function viewEmp(connection) {

    console.log("Employee table");
    const SQL_STATEMENT = `SELECT * FROM employee_tracker.employee;`; 

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);
    } catch (err) {
        console.log(err);

    }

};

// Function and query to view all roles
async function viewRole(connection) {

    console.log("Role table");
    const SQL_STATEMENT = `SELECT role.id , role.title, role.salary, department.name 
                            FROM role
                            inner join department on role.department_id = department.id;`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);

    } catch (err) {
        console.log(err);

    }
}

// Function and query to view all department
async function viewDept(connection) {

    console.log("Department table");
    const SQL_STATEMENT = `SELECT * FROM employee_tracker.department;`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);

    } catch (err) {
        console.log(err);

    }
};

// Function and query to add department 
async function addDept(connection, dept) {
 
    console.log("Department table");   
    const SQL_STATEMENT = `INSERT INTO department SET ?`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, {name: dept});
        console.table(rows);

    } catch (err) {
        console.log(err);

    }
};

// Function and query to add employee
async function addEmp(connection, firstName, lastName, roleId, managerId) {

    const SQL_STATEMENT = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?,?,?,?)`;
    // const SQL_STATEMENT = `INSERT INTO employee SET ?`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [firstName, lastName, roleId, managerId]);
        console.table(rows);
    } catch (err) {
        console.log(err);
        console.log("employee added");

    }

};


// Function and query to add role
async function addRole(connection, title, salary, dept_id) {
    // const SQL_STATEMENT = `INSERT INTO role SET title = ?, salary = ?, department_id = ?`;
    const SQL_STATEMENT = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?);`;
    // const SQL_STATEMENT = `INSERT INTO role SET ?`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [title, salary, dept_id]);
        console.table(rows);

    } catch (err) {
        console.log(err);
        console.log("Role added");

    }
};


// Function and query to update employee role column
async function updateEmpRole(connection, role_id, employee_id) {

    const SQL_STATEMENT = `UPDATE employee SET role_id = ? WHERE id = ?;`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [role_id, employee_id]);
        console.table(rows);

    } catch (err) {
        console.log(err);
        console.log("Role added");

    }
}

// Function and query to update manager ID
async function updateManager(connection, manager_id, employee_id) {

    const SQL_STATEMENT = `UPDATE employee SET manager_id = ? WHERE id = ?;`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [manager_id, employee_id]);
        console.table(rows);

    } catch (err) {
        console.log(err);
        console.log("Role added");

    }
}

// module exports
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