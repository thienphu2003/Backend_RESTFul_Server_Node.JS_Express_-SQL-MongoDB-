const express = require("express");
const {
  getHomePage,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.post("/create_user", postCreateUser);

module.exports = router;
