const { getAllUsers, getUserById, updateUserById, deleteUserById, createUser } = require('../services/crudService');
const { uploadFile, uploadMultipleFiles } = require('../services/fileService');

const uploadFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    const result = await uploadFile(req.files.sampleFile);
    console.log('🚀 ~ uploadFileAPI ~ result:', result);
    res.send(result);
};

const uploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files);
    if (Array.isArray(req.files.file)) {
        const result = await uploadMultipleFiles(req.files.file);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    } else {
        return await this.uploadFileAPI(req, res);
    }
};

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
    uploadFileAPI,
    uploadMultipleFilesAPI,
};
