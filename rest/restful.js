const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// In-memory player data store
const players = [];

app.use(bodyParser.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Text RPG Game API!');
});

// Get player information
app.get('/player', (req, res) => {
  res.json(players);
});

// Get player by name
app.get('/player/:name', (req, res) => {
  const playerName = req.params.name;
  const player = players.find(p => p.playerName === playerName);
  if (player) {
    res.json(player);
  } else {
    res.status(404).send('Player not found.');
  }
});

// Create a new player
app.post('/player', (req, res) => {
  const newPlayer = req.body;
  players.push(newPlayer);
  res.json(newPlayer);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
