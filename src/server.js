const express = require("express");
const path = require("path");
// import express from "express";
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  console.log("Enter /");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
