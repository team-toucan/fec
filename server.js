const express = require('express');
const path = require('path');
const app = express();
const api = require('./api')
require('dotenv').config();
console.log('apiKey',process.env.apiKey)


//middleware
app.use(express.json());

app.use(express.static('./dist'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))

})






const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if(err) {
    console.log(err)
  } else {
  console.log(`sever running on port ${PORT}`)
  }});
