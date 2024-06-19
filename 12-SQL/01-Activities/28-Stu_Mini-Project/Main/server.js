const express = require("express");
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require("pg");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    // Enter PostgreSQL username
    user: "postgres",
    // Enter PostgreSQL password
    password: "postgres",
    host: "127.0.0.1",
    database: "movies_db",
  },
  console.log("Connected to the movies_db database!")
);

pool.connect();

app.get(`/api/movies`, ({ body }, res) => {
  pool.query(
    "SELECT id, movie_name AS title FROM movies",
    function (err, { rows }) {
      console.log(rows);
      if (err) res.status(500).json({ error: err.message });

      res.json({
        message: "success",
        data: rows,
      });
    }
  );
});

app.get(`/api/movie-reviews`, (req, res) => {
  pool.query(
    `SELECT movies.movie_name AS movie, reviews.review
    FROM reviews
    LEFT JOIN movies
    ON reviews.movie_id = movies.id
    ORDER BY movies.movie_name;`,
    function (err, { rows }) {
      console.log(rows);
      if (err) res.status(500).json({ error: err.message });

      res.json({
        message: "success",
        data: rows,
      });
    }
  );
});

app.post(`/api/add-movie`, (req, res) => {
  const sql = `INSERT INTO movies (movie_name) VALUES ($1)`;
  const { movie_name } = req.body;

  pool.query(sql, [movie_name], (err, { rows }) => {
    if (err) res.status(500).json({ error: err.message });

    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.delete(`/api/movie/:id`, (req, res) => {
  const sql = `DELETE FROM movies WHERE id = $1`;

  pool.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!result.rowCount) {
      res.json({
        message: "Movie not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.rowCount,
        id: req.params.id
      });
    }
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
