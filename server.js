// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the EJS page
app.get('/', (req, res) => {
  res.render('index', {
    data: [15, 25, 35, 45, 55] // More detailed sample data
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
