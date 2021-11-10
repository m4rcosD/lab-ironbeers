const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.get("/", (req, res) => {
          res.render(__dirname + '/views/index.hbs', {layout: false})
});

app.get("/beers", (req, res) => {
  punkAPI
  .getBeers()
  .then(beersFromApi  =>  res.render(__dirname + '/views/beers.hbs',  { beersFromApi } ))
  .catch(error => console.log(error));
});

app.get("/random-beer", (req, res) => {
  punkAPI 
  .getRandom()
  .then(responseFromAPI =>  { res.render(__dirname + '/views/random-beer.hbs',  { responseFromAPI } )})

  .catch(error => console.log(error)); 
});
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers/:id', (req, res) => {
      let {id} = req.params;
      punkAPI
  });

app.listen(3000, () => console.log('🏃‍ on port 3000'));