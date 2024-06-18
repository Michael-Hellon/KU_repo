-- Write code here or enter directly in PostgreSQL shell --
CREATE DATABASE SAMPLE_DB;

-- Create two new databases --
DROP DATABASE IF EXISTS SAMPLE_DB;

CREATE DATABASE BOOKS_DB;

-- Use inventory_db --
\C BOOKS_DB;

-- See database in use --
SELECT
    CURRENT_DATABASE();