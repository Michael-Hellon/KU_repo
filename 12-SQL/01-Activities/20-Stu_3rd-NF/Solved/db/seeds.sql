INSERT INTO businesses (business_id, business_name ) VALUES
(1, 'Prosser Lankovitch Products' ),
(2, 'Ripley Enterprises'),
(3, 'Gormenghast, Inc.'),
(4, 'Nullhammer Corporation');

INSERT INTO locations (location_id, location_name, location_manager) VALUES
( 101, 'Annapolis, MD', 'Rita Ivanov'),
( 102, 'Los Angeles, CA', 'Aaron Kamara'),
( 103, 'Lincoln, NB', 'Farahd Mohamed'),
( 104, 'Saskatchewan, CA', 'Amara Marquez');

INSERT INTO location_business_map (business_id, location_id) VALUES
(1, 101 ),
(2, 102 ),
(3, 103 ),
(4, 104 );

SELECT businesses.business_id, businesses.business_name, locations.location_name, locations.location_manager 
FROM businesses
JOIN location_business_map ON businesses.business_id = location_business_map.business_id
JOIN locations ON location_business_map.location_id = locations.location_id;
