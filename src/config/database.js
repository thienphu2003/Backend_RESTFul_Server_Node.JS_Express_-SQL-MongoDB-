const mysql = require("mysql2/promise");
require("dotenv").config();
const mongoose = require("mongoose");

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT),
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   charset: "utf8mb4",
// });

const connection = async () => {
  try {
    // console.log("DB_HOST:", process.env.DB_HOST);
    const option = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(process.env.DB_HOST, option);
    console.log(mongoose.connection.readyState);
  } catch (error) {
    console.log("Error connecting db >>>>", error);
  }
};

module.exports = connection;
