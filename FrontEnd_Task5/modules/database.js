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

const select = (connection, res, next)=>{
  connection.query(
      'SELECT * FROM things',
      (err, results, fields) =>{
        res.send(results);
      },
  );
};

const insert = (connection, data, res, next) =>{
  connection.execute(
      'INSERT INTO things (category, title, details, image, thumbnail, original, coordinates) VALUE (?,?,?,?,?,?,?);', data,
      (err, results, fields) =>{
        console.log(err);
        res.send('ok');
      },
  );
};

const remove = (connection, id, res)=>{
  console.log(id);
  connection.query(
      'DELETE FROM things WHERE id = ?', id,
      (err, results, fields)=>{
        console.log('remove');
      }
  );
  res.send('delete '+id);
};

const update = (connection, data, res)=>{
  console.log(data);
  connection.execute(
      'UPDATE things SET category = ?,title = ?,details = ? WHERE id = ?', data,
      (err, results, fields)=>{
        console.log('update');
      }
  );
  res.send('update'+data.id);
};

const search = (connection, req, res)=>{
  console.log(req.body);
  const data = [req.body.type, req.body.search];
  connection.query(
    `SELECT * FROM things WHERE  ${req.body.type}=?`, req.body.search,
      (err, results, fields)=>{
        console.log(results);
        res.send(results);
      }
  );
};
module.exports = {
  connect: connect,
  select: select,
  insert: insert,
  remove: remove,
  update: update,
  search: search
};