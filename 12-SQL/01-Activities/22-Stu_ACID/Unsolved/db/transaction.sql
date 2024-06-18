DROP DATABASE IF EXISTS LIBRARY;

-- Create a new database
CREATE DATABASE LIBRARY;

-- Connect to the newly created database
\C LIBRARY;

DROP TABLE IF EXISTS BOOKS;

DROP TABLE IF EXISTS AUTHORS;

-- Create a books table
CREATE TABLE BOOKS (
    BOOK_ID INTEGER PRIMARY KEY,
    BOOK_NAME VARCHAR(255)
);

-- Create an authors table
CREATE TABLE AUTHORS (
    AUTHOR_ID INTEGER PRIMARY KEY,
    AUTHOR_NAME VARCHAR(255)
);

-- TODO: Add a transaction block here
DO $$

DECLARE
 -- nothing to declare here
BEGIN
    INSERT INTO BOOKS (
        BOOK_ID,
        BOOK_NAME
    ) VALUES (
        1,
        'Pride and Prejudice'
    ), (
        2,
        'To Kill a Mockingbird'
    ), (
        3,
        'The Great Gatsby'
    );
    INSERT INTO AUTHORS (
        AUTHOR_ID,
        AUTHOR_NAME
    ) VALUES (
        10,
        'Jane Austen'
    ), (
        11,
        'Harper Lee'
    );
    RAISE NOTICE 'Transaction Complete';
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'An error occured: %', SQLERRM;
        ROLLBACK;
END $$;