const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// Use async / await to Refactor the seedDatabase function below
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Book.bulkCreate(bookSeedData);

    await Library.bulkCreate(librarySeedData);

    console.log('All Seeds Planted'); 
    
  } catch (error) {
    console.error(error);
  }

  process.exit(0);
};

seedDatabase();
