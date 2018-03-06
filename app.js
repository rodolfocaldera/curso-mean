'use strict'

var express = require('express');
var bodyParse = require('body-parser');
var app = express();

//cargar rutas
var user_routes = require('./routes/user');
var artist_routes = require('./routes/artist');
var album_routes = require('./routes/album');
app.use(bodyParse.urlencoded({extendes:false}));
app.use(bodyParse.json());

//Configurar cabeceras http


//Rutas base
app.use('/api',user_routes);
app.use('/api',artist_routes);
app.use('/api',album_routes);
module.exports = app;
