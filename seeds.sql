DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    PRIMARY KEY(id)
);


CREATE TABLE role
(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee
(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
);


INSERT INTO department (name) 
VALUES  ("IT");

INSERT INTO role (title, salary, department_id) 
VALUES ("Sr_Developer", 100, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ("Afam", "Anekeh", 10, 1);

SELECT * FROM employee_tracker.employee;