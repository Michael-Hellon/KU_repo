const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// / html pages
router.use('/', homeRoutes);

// using REST
router.use('/api', apiRoutes);

module.exports = router;