const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I like what i like, cant help it'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
