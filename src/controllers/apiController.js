const { getAllUsers, getUserById, updateUserById, deleteUserById, createUser } = require('../services/crudService');

const getUsersAPI = async (req, res) => {
    const results = await getAllUsers();
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};
const postUsersAPI = async (req, res) => {
    const { name, email, city } = req.body;
    console.log(name, email, city);
    const results = await createUser(name, email, city);
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

const updateUsersAPI = async (req, res) => {
    const { name, email, city } = req.body;
    const { id } = req.params;
    const results = await updateUserById(id, name, email, city);
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};
const deleteUsersAPI = async (req, res) => {
    const { id } = req.params;
    const results = await deleteUserById(id);
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

module.exports = {
    getUsersAPI,
    postUsersAPI,
    updateUsersAPI,
    deleteUsersAPI,
};
