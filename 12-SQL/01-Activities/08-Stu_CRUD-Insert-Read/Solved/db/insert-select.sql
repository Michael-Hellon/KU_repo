-- This inserts a series of biographies into the biographies table.
INSERT INTO biographies (id, name)
VALUES
    ( 001, 'Diary of Anne Frank'),
    ( 002, 'Frida: A Biography of Frida Kahlo'),
    ( 003, 'Long Walk to Freedom');

-- load all data from the biographies table.
SELECT * FROM biographies;
