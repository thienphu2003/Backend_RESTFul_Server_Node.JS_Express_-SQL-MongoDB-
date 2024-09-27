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
  return results;
};

module.exports = {
  getAllUsers,
  getUserById,
};
