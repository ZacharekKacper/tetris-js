// const express = require("express");

// const path = require('path'); 
// const app = express();
// const sitePath = path.join(__dirname, "site");

// app.use(express.static(sitePath));

// app.listen(8080);
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;
const path = require('path')
const sitePath = path.join(__dirname, "site");

app.use(express.static(sitePath));
app.use(bodyParser.json()); // parsowanie ciała żądania jako JSON

app.post('/save-data', (req, res) => {
  const data = req.body;
  console.log(data);

  // Zapisz dane do bazy danych

  res.send('Dane zostały zapisane');
});

app.listen(port, () => {
  console.log(`Aplikacja działa na porcie ${port}`);
});