'user strict';
const mysql = require('mysql2');
require('dotenv').config();
const express = require('express');
const multer = require('multer');

const connect = () =>{
  const x= mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
  });
  console.log('connection established');
  return x;
};

const select = (connection, res)=>{
  connection.query(
      'SELECT * FROM things',
      (err, results, fields) =>{
        console.log(results);
        res.send(results);
      },
  );
};

const insert = (data, connection, res, next) =>{
  console.log(data);
  connection.execute(
      'INSERT INTO things (category, title, details, image, thumbnail, original, coordinates) VALUE (?,?,?,?,?,?,?);', data,
      (err, results, fields) =>{
        console.log(results);
        //res.send(results);
      },
  );
  next();
};

module.exports = {
  connect: connect,
  select: select,
  insert: insert
};