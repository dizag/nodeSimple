const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());

require('./app/routes/user.routes.js')(app);

let server = app.listen(8081, function () {

  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://localhost:", host, port);

})

module.exports = server