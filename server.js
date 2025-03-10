const express = require('express');
const dns = require('dns');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/resolve/:hostname', (req, res) => {
 const hostname = req.params.hostname;
 dns.lookup(hostname, (err, address) => {
 if (err) {
 res.status(400).send({ error: 'Invalid hostname' });
 } else {
 res.send({ hostname, address });
 }
 });
});

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}/`);
});