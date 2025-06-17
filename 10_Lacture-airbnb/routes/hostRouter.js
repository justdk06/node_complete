const express = require('express');
const hostRouter = require('./routes/userRouter');


app.get('/host/add-home',(req, res, next) =>{
  console.log(req.url, req.method);
  res.send(`
    <h1> Register your home here: </h1>
    <form action="./host/add-home" method="POST">
      <input type="text" name="houseName"mplaceholder="Enter the nameof your house" />
      <input type="submit" />
    </form>
    `)
})

app.post('/host/add-home',(req, res, next) =>{
  console.log(req.body)
  res.send(`
    <h1>Home Registered successfully</h1>
    <a href="/">Go to Home</a>
    `);
})

module.exports = hostRouter;