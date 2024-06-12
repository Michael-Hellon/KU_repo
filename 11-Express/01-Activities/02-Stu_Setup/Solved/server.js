const express = require('express')
const path = require('path')

const app = express()
const PORT = 3001

// Invoke app.use() and serve static files from the '/public' folder
//app.use(express.static('public'))

function rootFn(req, res) {
  //res.send('Navigate to /send or /routes')
  res.sendFile(path.join(__dirname, 'public/index.html'))
}

app.get('/', rootFn)

app.get('/jass.css', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/jass.css'))
)

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
)

// Create a route that will serve up the `public/paths.html` page
app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
)

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
)
