const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // express uses cookies by default, but we can edit these properties
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // sets max age for the page to expire in 3.6 million millisec (an hour)
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    // This is goin to tell the express session to only store cookies when the protocol is http
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    // This tells the session to only init cookies when the protocol is https, because its false -  it will allow cookies for unsecure https.
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    /*  The "SameSite" attribute limits the scope of the cookie such that it
    will only be attached to requests if those requests are same-site, as
    defined by the algorithm in Section 5.2.  For example, requests for
    "https://example.com/sekrit-image" will attach same-site cookies if
    and only if initiated from a context whose "site for cookies" is
    "example.com".

   If the "SameSite" attribute's value is "Strict", the cookie will only
   be sent along with "same-site" requests.
   */
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
