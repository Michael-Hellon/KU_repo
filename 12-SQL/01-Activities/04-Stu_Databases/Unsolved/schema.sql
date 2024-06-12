-- Write code here or enter directly in PostgreSQL shell --

CREATE DATABASE sample_db;

-- Create two new databases --
DROP DATABASE IF EXISTS sample_db;
CREATE DATABASE books_db;

-- Use inventory_db -- 
\c books_db;

-- See database in use --
SELECT current_database();