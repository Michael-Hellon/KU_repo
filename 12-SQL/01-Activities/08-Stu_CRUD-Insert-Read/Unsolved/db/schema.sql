DROP DATABASE IF EXISTS books_db;

-- creates a DB called books?
CREATE DATABASE books_db;

-- switching the active data base to connects to the books_db
\c books_db;

-- creates a table called biographies
CREATE TABLE biographies (

  -- creates a id column with a data type INTEGER and putting a check that it cannot be null
  -- not null will check if the value in this column is null and if it.... 
  id INTEGER NOT NULL,

  -- creates a name column with the data type of VARCHAR(100) and putting a check that it cannot be null
  name VARCHAR(100) NOT NULL
);

