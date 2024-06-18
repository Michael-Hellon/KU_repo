-- Inserting data into businesses
INSERT INTO BUSINESSES (
    BUSINESS_ID,
    BUSINESS_NAME
) VALUES (
    1,
    'Prosser Lankovitch Products'
),
(
    2,
    'Ripley Enterprises'
),
(
    3,
    'Gormenghast, Inc.'
),
(
    4,
    'Nullhammer Corporation'
);

INSERT INTO LOCATION (
    LOCATION_ID,
    LOCATION_NAME,
    LOCATION_MANAGER
)VALUES (
    101,
    'Annapolis, MD',
    'Rita Ivanov'
),
(
    102,
    'Los Angeles, CA',
    'Aaron Kamara'
),
(
    103,
    'Lincoln, NB',
    'Farahd Mohamed'
),
(
    104,
    'Saskatchewan, CA',
    'Amara Marquez'
);

(1,
101),
(2,
102),
(3,
103),
(4,
104);

SELECT
    BUSINESSES.BUSINESS_ID,
    BUSINESSES.BUSINESS_NAME,
    LOCATION.LOCATION_NAME,
    LOCATION.LOCATION_MANAGER
FROM
    BUSINESSES,
    JOIN LOCATION_BUSINESS_MAP
    ON BUSINESSES.BUSINESS_ID = LOCATION_BUSINESS_MAP.BUS