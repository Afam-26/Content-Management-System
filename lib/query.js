async function viewEmp(connection) {

    console.log("Employee table");
    const SQL_STATEMENT = `SELECT * FROM employee_tracker.employee;`;
    

   

    // const SQL_STATEMENT = `SELECT employee.id, employee.first_name, employee.last_name
    // , role.title, role.salary, department.name department,
    // concat(employee2.first_name, " ", employee2.last_name) manager
    // FROM employee
    // LEFT JOIN role on employee.role_id = role.id
    // LEFT JOIN employee employee2 on employee.manager_id = employee2.id
    // LEFT JOIN department on department.id = role.department_id order by department`

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);
    } catch (err) {
        console.log(err);

    }

};

async function viewRole(connection) {

    console.log("Role table");
    const SQL_STATEMENT = `SELECT * FROM employee_tracker.role;`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);

    } catch (err) {
        console.log(err);

    }
}

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

async function addDept(connection, dept) {

    console.log("Department table");
    const SQL_STATEMENT = `INSERT INTO department (name) VALUE (?)`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [dept]);
        console.table(rows);

    } catch (err) {
        console.log(err);

    }
};

async function addEmp(connection, firstName, lastName, roleId, managerId) {

    const SQL_STATEMENT = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?,?,?,?)`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [firstName, lastName, roleId, managerId]);
        console.table(rows);
    } catch (err) {
        console.log(err);
        console.log("employee added");

    }

};

async function addRole(connection, title, salary, dept_id) {

    const SQL_STATEMENT = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?);`;
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [title, salary, dept_id]);
        console.table(rows);

    } catch (err) {
        console.log(err);
        console.log("Role added");

    }
};

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