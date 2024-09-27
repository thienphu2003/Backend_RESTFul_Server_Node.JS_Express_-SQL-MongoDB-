const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.post("/create_user", postCreateUser);

router.get("/create", getCreatePage);

module.exports = router;
