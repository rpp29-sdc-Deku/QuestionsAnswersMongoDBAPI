const express = require('express');
const bodyParser = require('body-parser')
const db = require('./Models/apiModel.js');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, useNewUrlParser: true}));
app.use(express.json());

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!`);
});