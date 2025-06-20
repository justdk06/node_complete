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

app.get("/",(req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to complete Coding</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us", req.url, req.method);
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
  `);

});

app.post('/contact-us', (req, res, next) =>{
  console.log("handling /contact-us for POST", req.url, req.method);
  res.send(`<h1>We will contact you shortly</h1>`);
})

app.get("/", )
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});