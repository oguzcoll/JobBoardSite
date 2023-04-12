const express = require('express');
const mysql = require('mysql');

// Create MySQL connection
const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'sqluser', 
  password: 'Bugra3738.', 
  database: 'u_wanna_job', 
});


