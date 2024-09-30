const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.post("/create_user", postCreateUser);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/update_user", postUpdateUser);

router.post("/delete_user/:id", getDeletePage);

router.post("/delete_user", postDeleteUser);

module.exports = router;
