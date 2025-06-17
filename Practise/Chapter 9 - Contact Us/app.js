const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy Middleware");
  next();
});

// app.use((req, res, next) => {
//   console.log("Third Middleware");
//   res.send('<h1>Welcome to complete Coding</h1>');
// });

app.use((req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to complete Coding</h1>`);
});

app.get("/", )
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});