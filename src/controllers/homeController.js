const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../services/crudService");

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
  res.render("edit.ejs", { user: results[0] });
};

const postCreateUser = async (req, res) => {
  const { name, email, city } = req.body;

  const [results, fields] = await connection.query(
    `INSERT INTO Users (name, email, city) VALUES (?, ?, ?)`,
    [name, email, city]
  );
  console.log("🚀 ~ postCreateUser ~ results:", results);
  res.send("Save user success");
  //   [name, email, city],)
  // connection.query(
  //   `INSERT INTO Users (name, email, city) VALUES (?, ?, ?)`,
  //   [name, email, city],
  //   function (err, results) {
  //     if (err) {
  //       console.error("Error inserting data: ", err);
  //       return res.status(500).send("Error saving user");
  //     }
  //     console.log(results);
  //     res.send("Save user success");
  //   }
  // );
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
