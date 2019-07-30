-- DROP DATABASE i1n80nu9ci8682wz;

-- CREATE DATABASE i1n80nu9ci8682wz;

-- USE i1n80nu9ci8682wz;

DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
