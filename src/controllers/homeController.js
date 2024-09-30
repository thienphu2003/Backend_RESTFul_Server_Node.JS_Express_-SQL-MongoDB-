const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
} = require("../services/crudService");

const getHomePage = async (req, res) => {
  const results = await getAllUsers();
  return res.render("home.ejs", { users: results });
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const id = req.params.id;
  const results = await getUserById(id);
  res.render("edit.ejs", { user: results });
};

const postCreateUser = async (req, res) => {
  const { name, email, city } = req.body;
  await createUser(name, email, city);
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  const { name, email, city, id } = req.body;
  await updateUserById(id, name, email, city);
  res.redirect("/");
};

const getDeletePage = async (req, res) => {
  const id = req.params.id;
  const results = await getUserById(id);
  res.render("delete.ejs", { user: results });
};

const postDeleteUser = async (req, res) => {
  await deleteUserById(req.body.id);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
};
