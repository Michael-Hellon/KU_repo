const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn)
  // TODO: If the user is logged in, allow them to view the paintings

};

module.exports = withAuth;
