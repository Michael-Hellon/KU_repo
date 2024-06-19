const Sequelize = require('sequelize');

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  'library_db',
  // User
  'postgres',
  // Password
  'oit',
  {
    // Database location
    host: 'localhost', // macs '127.0.0.1'
    dialect: 'postgres'
  }
);

module.exports = sequelize;
