
const express = require('express');
var morgan = require('morgan')
//const router = require('./links.js');
const app = express();
const parser = require('body-parser'); // for parsing post requestes from gtml template
// const mongoose = require('mongoose'); // DB CRUD op
// const session = require('express-session'); // for using flashes
// const flash = require("express-flash"); // flashing
// const passport = require('passport'); // for user auth

const data_inf = require('./all_data.js')

const PORT = process.env.PORT || 80;
app.use(parser.urlencoded({ extended: false }));
// run server

app.set('view engine', 'ejs');
app.use(morgan('combined'))

app.get('/', function(req, res){ 
    res.render('index',{user: "Great User",title:"homepage",d_values:data_inf});
});

app.get('/new', (req, res) => {
    res.send('This is the homepage');
  });

app.get('/s', (req, res) => {
    res.send('This is the second page');
  });

  
// console.log(data_inf)
app.listen(PORT, '0.0.0.0', ()=>{ console.log(`Server running on port: ${PORT}`); })