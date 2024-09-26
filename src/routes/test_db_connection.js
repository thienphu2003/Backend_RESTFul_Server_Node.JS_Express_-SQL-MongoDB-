const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
require("dotenv").config();

router.get("/old", (req, res) => {
  try {
    let totalExec = 0;
    for (let i = 0; i < 1000; i++) {
      const pre_query = new Date().getTime();
      console.log("🚀 ~ router.get ~ pre_query:", pre_query);
      let con = null;
      con = mysql.createConnection({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      });
      con.query("Select * from Users", function (err, results, fields) {
        const post_query = new Date().getTime();
        console.log("🚀 ~ post_query:", post_query);
        const duration = (post_query - pre_query) / 1000;
        console.log(">>>", " i = ", i, " duration = ", duration);
        totalExec += duration;
        if (i === 999) {
          const avg = totalExec / 1000;
          return res.send("Average :" + avg);
        }
      });
      con.destroy();
    }
  } catch (error) {
    console.log("🚀 ~ router.get ~ error:", error);
  }
});

router.get("/pool", (req, res) => {
  try {
    let totalExec = 0;
    let con = null;
    con = mysql.createPool({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    for (let i = 0; i < 1000; i++) {
      const pre_query = new Date().getTime();
      con.query("Select * from Users", function (error, results, fields) {
        const post_query = new Date().getTime();
        const duration = (post_query - pre_query) / 1000;
        console.log(">>>", " i = ", i, " duration = ", duration);
        totalExec += duration;
        if (i === 999) {
          const avg = totalExec / 1000;
          return res.send("Average :" + avg);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
