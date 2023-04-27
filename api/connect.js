import mysql from "mysql";

// Create MySQL connection
export const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "springstudent",
  password: "springstudents",
  database: "uwannajob",
});

dbConnection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to MYSQL");
  }
});
