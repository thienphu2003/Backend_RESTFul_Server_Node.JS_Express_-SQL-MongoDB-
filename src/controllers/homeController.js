const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
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
};
