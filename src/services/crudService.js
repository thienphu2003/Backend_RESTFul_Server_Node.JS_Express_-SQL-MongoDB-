const connection = require("../config/database");
const User = require("../models/user");

const getAllUsers = async () => {
  const results = await User.find();
  return results;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const createUser = async (name, email, city) => {
  const results = await User.create({
    email,
    name,
    city,
  });
  console.log(results);
  return results;
};

const updateUserById = async (id, name, email, city) => {
  const results = await User.updateOne({ _id: id }, { name, email, city });
  return results;
};

const deleteUserById = async (id) => {
  const results = await User.findByIdAndDelete(id);
  return results;
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
};
