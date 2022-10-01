const express = require('express');
const path = require('path');

const app = express();
const options = {
  root: path.join(__dirname, 'public'),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
}

app.get('/', (req, res) => {
  res.sendFile('index.html', options);
})

app.get('/me', (req, res) => {
  res.send('hi i am Achilles');
})



app.listen(5000, () => {
  console.log('Server is running .......');
})