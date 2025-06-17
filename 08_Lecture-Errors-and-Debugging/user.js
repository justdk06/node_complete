const fs = require('fs');

const userRequestHandler = ((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding </title></head>');
    res.write('<body><h1>Enter Your Details:</h1>')
    res.write('<form action="/submit-details" method="POST">');
    res.write("<input type='text' name='username' placeholder='Enter Your Name' />")
    res.write("<label for='male'>Male</label>")
    res.write("<input type='radio' id='male' name='gender' value='male' />")
    res.write("<label for='female'>Female</label>")
    res.write("<input type='radio' id='female' name='gender' value='female'>")
    res.write('<input type="submit" value="Submit" />');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>')
    return res.end();
  } else if (req.url.toLowerCase() === '/submit-details' && req.method == 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      fs.writeFileSync('user.txt', `${bodyObject.username} - ${bodyObject.gender}`);

      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end(); // ✅ end the response here inside 'end' block
    });
    return; // ✅ avoid continuing execution below before data is processed
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding </title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>')
  return res.end();
});

module.exports = userRequestHandler;