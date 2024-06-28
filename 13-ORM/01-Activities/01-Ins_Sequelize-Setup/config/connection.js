const Sequelize = require('sequelize');

// Create a connection object
const sequelize = new Sequelize(
  // Database name - same as in schema
  'library_db', 
  // User
  'postgres',
  // Password - must enter password to run
  '',
  {
    // Database location
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
