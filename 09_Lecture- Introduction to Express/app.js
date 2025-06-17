const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// First Middleware
app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

// Second Middleware
app.use((req, res, next) => {
  console.log("Second Dummy Middleware");
  next();
});

// GET /
app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to complete Coding</h1>`);
});

// GET /contact-us
app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us", req.url, req.method);
  res.send(`
    <h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="submit" />
    </form>
  `);
});

// POST /contact-us
app.post('/contact-us', (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.send(`<h1>We will contact you shortly, ${req.body.name}</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});