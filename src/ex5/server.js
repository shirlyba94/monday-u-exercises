const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api.js')

const main = async () => {

  const app = express();

  app.use(express.static("./dist"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/', api);

  const port = process.env.PORT || '3042';
  app.listen(port, function () { console.log('Running on ' + port); });
};

main();
