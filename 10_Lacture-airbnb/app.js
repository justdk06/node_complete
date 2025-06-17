const path = require('path');
const express = require('express');

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');

const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Log every request
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Routes
app.use(userRouter);
app.use('/host', hostRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});