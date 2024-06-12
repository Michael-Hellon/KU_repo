const router = require('express').Router();

const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);

module.exports = router;