const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

let app = express();
app.use(cors())
app.use(bodyParser.json());

require('./app/routes/entities.routes.js')(app);

let server = app.listen(8087, function () {

  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://localhost:", host, port);

});

module.exports = server;


