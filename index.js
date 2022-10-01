const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('this is my express');
})

app.get('/me', (req, res) => {
  res.send('hi i am Achilles');
})



app.listen(5000, () => {
  console.log('Server is running .......');
})