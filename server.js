const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

//heroku entrega de manera global el puerto 
const port = process.env.PORT || 3000;

//midelware
app.use(express.static(__dirname + '/public'));
//Expredd HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'fernando',
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        //nombre: 'fernando',
    });
});
app.listen(port);