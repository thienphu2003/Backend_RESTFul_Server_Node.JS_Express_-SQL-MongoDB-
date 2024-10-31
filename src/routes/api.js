const express = require('express');
const {
    getHomePage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    getDeletePage,
} = require('../controllers/homeController');
const routerAPI = express.Router();

const { getUsersAPI, postUsersAPI, updateUsersAPI, deleteUsersAPI } = require('../controllers/apiController');

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postUsersAPI);
routerAPI.put('/user/:id', updateUsersAPI);
routerAPI.delete('/user/:id', deleteUsersAPI);

module.exports = routerAPI;
