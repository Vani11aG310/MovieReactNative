var express = require('express');
var app = express();
var cineplexScraper = require('cineplex-scraper')

// var mysql = require('mysql');
var bodyparser = require('body-parser');
let url = require('url');
let querystring = require('querystring');

app.use(bodyparser.json({type: 'application/json'}));
app.use(bodyparser.urlencoded({extended:true}));

// var con = mysql.createConnection({
//     host: 'localhost:3306',
//     user: 'admin',
//     password: 'Angvil_02120'
// })

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function(){
    console.log(`Our app is running on port ${ PORT }`);
});

app.get('/theatres', function(req, res){
    let theatres = [];
    async function initTheatres(){
        theatres = await cineplexScraper.theatres();
        res.send(theatres);
    }
    initTheatres();
    
    
});

