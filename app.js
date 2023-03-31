const express = require("express");

const path = require('path'); 
const app = express();
const sitePath = path.join(__dirname, "site");

app.use(express.static(sitePath));

app.listen(8080)
