const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Server B');
});

app.listen(port, () => {
  console.log(`Server B listening at http://localhost:${port}`);
  keepAlive();
});

function keepAlive() {
  setInterval(() => {
    axios.get('https://server-alpha-3.onrender.com/')
      .then(response => {
        console.log('Ping to Server A successful');
      })
      .catch(error => {
        console.error('Error pinging Server A:', error);
      });
  }, 120000); // 60,000 milliseconds = 1 minute
}
