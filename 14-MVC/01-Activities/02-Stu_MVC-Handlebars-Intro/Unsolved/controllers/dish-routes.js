// its the controller that handles the routes
const router = require('express').Router();

// getting the data from the dish table, returning it to the front end
router.get('/', async (req, res) => {
// renders the template for "all.handlebars" HTML
  res.render('all');
});

module.exports = router;
