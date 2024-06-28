const router = require('express').Router();
const User = require('../../models/User');

// This route uses async/await with '.catch()' for errors
// and no HTTP status codes
router.get('/', async (req, res) => {
    const userData = await User.findAll().catch((err) => {
      res.json(err);
    });
    res.json(userData);
  });
  
 
// This route uses async/await with try/catch for errors
// along with HTTP status codes
router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      // 200 status code means the request is successful
      res.status(200).json(userData);
    } catch (err) {
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    }
});
  

// GET a user
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id)
        if (!userData) {
            res.status(404).json({message: `user ${req.params.id} is not found!`})
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({message: 'Internal server error!'});
    }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
        if (!userData[0]) {
            res.status(404).json({message: `user ${req.params.id} is not found!`})
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({message: 'Internal server error!'});
    }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!userData) {
            res.status(404).json({message: `user ${req.params.id} is not found!`})
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({message: 'Internal server error!'});
    }
});

module.exports = router;
