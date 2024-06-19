DROP DATABASE IF EXISTS books_db;

-- creating a new database called books_db
CREATE DATABASE books_db;

-- switching the active database to the new books_db database.
\c books_db;

-- creating a new table called biographies.
CREATE TABLE biographies (

  -- we are declareing a value as an integer and putting a check that it cannot be null.
  -- not null will check if the value in this column is null and if it is it will reject that insert.
  id INTEGER NOT NULL,

  -- we are declaring a value for the name as a string of lentgh 100.
  name VARCHAR(100) NOT NULL
);

