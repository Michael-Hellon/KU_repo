DROP DATABASE IF EXISTS BOOKS_DB;

-- Creates the "books_db" database --
CREATE DATABASE BOOKS_DB;

-- Use books_db database --
\C BOOKS_DB;

CREATE TABLE FICTION (
 -- Creates a numeric column called "id" which cannot contain null --
  ID INTEGER NOT NULL,
 -- Creates a string column called "name" which can hold up to 100 characters and cannot contain null --
  NAME VARCHAR(100) NOT NULL