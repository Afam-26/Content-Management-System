DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department
(
    id INT NOT NULL,
    name VARCHAR(30) NULL,
    PRIMARY KEY(id)
);


CREATE TABLE role
(
    id INT NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee
(
    id INT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
);


INSERT INTO department (id, name) VALUES  ("vanilla", 2.50, 100);

INSERT INTO role (id, title, salary, department_id) VALUES ("chocolate", 3.10, 120);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES ("strawberry", 3.25, 75);