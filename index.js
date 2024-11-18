const express = require('express');
const app = express();
const port = 3000;

const users = [
  {name: "Marcus", hasBeard: true, bikesToWork: true, playsAnInstrument: true, hostsJFokus: false},
  {name: "Ove", hasBeard: true, bikesToWork: true, playsAnInstrument: true, hostsJFokus: true},
]



app.get('/', (req, res) => {
  res.send('<h1>Hello AARO!</h1>Check out the <a href="/api/users">API</a>');
});

app.get('/api/users', (req, res) => {
  res.json(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})