var express = require('express');
var router = express.Router();

let fs = require('fs');

/* GET movie page. */

//Définir la route en fonction d'un id => film1, film2 ... 

router.get('/:id', function (req, res, next) {
    console.log(req.params.id)
    let idMovie = req.params.id


    fs.readFile('./data/movies.json', (err, data) => {
        if (err) throw err
        let dataMovies = JSON.parse(data)


        let filmAAfficher = dataMovies[idMovie]

        console.log(filmAAfficher.lienImg)

        res.render('movie', {
            title: "BestMovies",
            filmAAfficher: filmAAfficher
        })
    })


})


module.exports = router;