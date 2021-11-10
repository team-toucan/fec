const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './dist')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

app.listen(PORT, (err) => {
  console.log(err ? err : `Server listening on ${PORT}`);
});
