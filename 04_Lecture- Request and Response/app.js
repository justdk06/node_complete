
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/'){
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Complete Coding </title></head>');
      res.write('<body><h1>Welcome to Home</h1></body>')
      res.write('<body><h1>Enter Your Details:</h1></body>')
      res.write('<form>');
      res.write("<input type='text' name='username' placeholder='Username'>")
      res.write('</form>');
      
      return res.end();
  }else if (req.url === '/products'){
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Complete Coding </title></head>');
      res.write('<body><h1>Check out our Products</h1></body>')
      return res.end();
  } 
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding </title></head>');
    res.write('<body><h1>Like / Share / Subscribe</h1></body>')
    return res.end();

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
});
