const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef= require('./data/chef.json')
app.use(cors());
const recipes = require('./data/recipes.json');

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/chef', (req, res) => {
  res.send(chef);
});

app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectChef = chef.find(sc => sc.id === id); 
  res.send(selectChef);
})

app.get('/recipes', (req, res) => {
  res.send(recipes);
})

app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.filter(mc => mc.id === id);
  res.send(recipe);
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})