-- DROP DATABASE "burgers_db";

CREATE DATABASE i1n80nu9ci8682wz;

USE i1n80nu9ci8682wz;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);
