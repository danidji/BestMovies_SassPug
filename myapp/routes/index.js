var express = require('express');
var router = express.Router();

let fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {

  fs.readFile('./data/movies.json', (err, data) => {
    if (err) throw err
    // On stocke les données du fichier JSON dans un variable
    let dataMovies = JSON.parse(data)
    // console.log(dataMovies)

    // On peut ainsi envoyer le contenue du JSON dans notre fichier .pug
    res.render('index', {
      title: "BestMovies",
      dataMovies
    })
  })
});

module.exports = router;
