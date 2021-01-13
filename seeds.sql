DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);


CREATE TABLE role
(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,4) NULL,
    department_id INT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee
(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY(id)
);






INSERT INTO department (name) 
VALUES 
("Management"), ("Marketing"),  ("Sales"), ("Legal");

INSERT INTO role
(title, salary, department_id)
VALUES 
("CEO", 550000.00, 1),
("Executive Assistant ", 290000.00, 1),
("Administrative Supervisor", 155000.00, 1),
("Account Executive", 75000.00, 2),
("Marketing Analyst", 70000.00, 2),
("Sales Development Representative", 45000.00, 2),
("Head of Sanitation", 69000.00, 4),
("Assistant Sanitation Specialist", 66600.00, 4);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
("Chinwe","Anekeh", 1, null),
("Calvin","Carter", 1, null),
("Jimi","Paige", 2, 1),
("Travis","Barker", 2, 1),
("Eric","Garcia", 2, 2),
("Bernie","Sanders", 3, 2),
("Afam", "Anekeh", 10, 1),
("Tom","Hanks", 4, 2);

