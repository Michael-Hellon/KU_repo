const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  // setup error handling, if an error occurs catch and send back to front end as a 500 err.
  try {
    // search for a specific user by using the email
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) { // if user does not exist, throw a 404 err.
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }

    // check if the password passed in is the same as the one in the database.
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    // if the passwords are not the same, we return a 400 err to the client and a message.
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // the password login is successful
    // 200 (OK) say that login was successful to the client
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
