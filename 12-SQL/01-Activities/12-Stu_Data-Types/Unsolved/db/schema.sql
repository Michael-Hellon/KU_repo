DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

\c customer_db;

CREATE TABLE customers (
  id,
  first_name,
  last_name,
  value_card_member
);
