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

const {
    getUsersAPI,
    postUsersAPI,
    updateUsersAPI,
    deleteUsersAPI,
    uploadFileAPI,
    uploadMultipleFilesAPI,
} = require('../controllers/apiController');

const {
    createCustomer,
    createManyCustomer,
    getListCustomer,
    updateCustomer,
    deleteCustomer,
    deleteManyCustomers,
} = require('../controllers/customerController');

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postUsersAPI);
routerAPI.put('/user/:id', updateUsersAPI);
routerAPI.delete('/user/:id', deleteUsersAPI);

routerAPI.post('/file', uploadFileAPI);
routerAPI.post('/files', uploadMultipleFilesAPI);

routerAPI.get('/customers', getListCustomer);
routerAPI.post('/customers', createCustomer);
routerAPI.post('/customers-many', createManyCustomer);
routerAPI.put('/customer/:id', updateCustomer);
routerAPI.delete('/customer/:id', deleteCustomer);
routerAPI.delete('/customers-many', deleteManyCustomers);

module.exports = routerAPI;
