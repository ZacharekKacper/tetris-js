const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 8080;
const path = require('path')
const sitePath = path.join(__dirname, "site");

app.use(express.static(sitePath));
app.use(bodyParser.json()); // parsowanie ciała żądania jako JSON

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  //password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
displayLeaderboard();
app.post('/save-data', (request, response) => {
  const data = request.body;
  console.log(data);

  // Zapisz dane do bazy danych
  connection.connect(function(err) {
    if (err) {
      console.error('Błąd połączenia z bazą danych: ' + err.stack);
      return;
    }
    console.log('Połączono z bazą danych.');
  });
  connection.query(
    `INSERT INTO leaderboard VALUES(null, '${data.playerName}',${data.level},${data.score},'${data.finalTime}');`,
    function(err, results, fields) {
      console.log(err);
    }
  );
  displayLeaderboard()
  response.send('Data saved succesfully');
});
function displayLeaderboard(){
  app._router.stack.forEach((route, i, routes) => {
    if (route.route && route.route.path === '/data' && route.route.methods.get) {
      routes.splice(i, 1)
    }
  })
connection.query(
    `SELECT player, level, score, time FROM leaderboard ORDER BY score DESC, level DESC, time ASC, player ASC;`,
    function(err, results, fields){
      console.log(results); // results contains rows returned by server
      app.get('/data', (request, response) => {
        const dataToSend = results;
        response.send(dataToSend);
      });
    }
  )
}


console.log(app._router.stack);
app.listen(port, () => {
  console.log(`App is working on a port: ${port}`);
});