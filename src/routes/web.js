const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.post("/create_user", postCreateUser);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

module.exports = router;
