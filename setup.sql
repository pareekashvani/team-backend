CREATE DATABASE IF NOT EXISTS team_db;
USE team_db;

CREATE TABLE IF NOT EXISTS team_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    experience VARCHAR(50)
);

INSERT INTO team_members (name, role, experience) VALUES 
('Alice Johnson', 'Frontend Developer', '3 years'),
('Bob Smith', 'Backend Developer', '5 years'),
('Charlie Brown', 'Project Manager', '8 years');
