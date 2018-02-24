--Creates new database
CREATE DATABASE burger_db;

USE burger_db;

--Creates new table with devour set to false
CREATE TABLE burger (
	id INT AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN default false, 
	PRIMARY KEY(id)
);	
