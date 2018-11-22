'use strict';
require('dotenv').config();
const express = require('express');
const db = require('./modules/database');
const imgHandler = require('./modules/img-handler');
const multer = require('multer');
const upload = multer({dest: 'public/img/original/'});
const exif = require('./modules/exif');
const app = express();
// create the connection to database
app.use(express.static('public'));

const connection = db.connect();

app.post('/upload/', upload.single('mediafile'), (req, res, next) => {
  next();
});

app.get('/grabpic/', (req,res,next) =>{
  db.select(connection, res);
});

app.use('/upload/', (req, res, next)=>{
  exif.getCoordinates(req.file.path).then(coords =>{
    console.log('------------------');
    console.log(coords);
    req.coor = coords;
    next();
  });
});

app.use('/upload/', (req, res, next)=>{
  const data = [
      req.body.category,
      req.body.title,
      req.body.details,
      req.file.filename +'_medium',
      req.file.filename+'_thumbs',
      req.file.filename,
      req.coor ];
  console.log('xxxxxxxxxxxxxxxx');
  db.insert(data, connection, res, next);
});

app.use('/upload/', (req, res, next)=>{
  imgHandler.resize(req.file.path, 200, './public/img/thumbs/'+req.file.filename+'_thumbs');
  next();
});

app.use('/upload/', (req, res, next)=>{
  imgHandler.resize(req.file.path, 200, './public/img/med/'+req.file.filename+'_medium');
  next();
});


app.listen(3000);

// *********************
// esimerkkejä:
/*
app.get('/', (req, res) => {
  console.log(req.ip);
  console.log(req.query.myParam);
  res.send('ok 1');
});

app.get('/path1/:param1', (req, res) => {
  console.log(req.params.param1);
  res.send('ok 2');
});

app.get(['/path2', '/path3', '/path4'], (req, res) => {
  console.log(req);
  res.send('ok 3');
});

app.use('/json', (req, res, next) => {
  console.log('Middleware tässä');
  next();
});

app.get('/json', (req, res) => {
  const objekti = {
    id: 1,
    name: 'My response',
  };
  res.send(objekti);
});
*/