const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUserById = async (id) => {
  const [results, fields] = await connection.query(
    "SELECT * from Users where id = ?",
    [id]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const createUser = async (name, email, city) => {
  const [results, fields] = await connection.query(
    `INSERT INTO Users (name, email, city) VALUES (?, ?, ?)`,
    [name, email, city]
  );
  return results;
};

const updateUserById = async (id, name, email, city) => {
  const [results, fields] = await connection.query(
    "UPDATE Users SET name = ?, email = ?, city = ? where id = ?",
    [name, email, city, id]
  );
  return results;
};

const deleteUserById = async (id) => {
  const [results, fields] = await connection.query(
    "DELETE FROM Users where id = ?",
    [id]
  );
  return results;
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
};
