const e = require('express');
const Customer = require('../models/customer');
const aqp = require('api-query-params');
const createCustomer = async (body) => {
    try {
        const result = await Customer.create(body);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const createManyCustomer = async (body) => {
    try {
        const result = await Customer.insertMany(body);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const getListCustomer = async (limit, page, queryString) => {
    try {
        let customers;
        if (limit && page) {
            const offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;
            console.log('🚀 ~ getListCustomer ~ filter:', filter);
            customers = await Customer.find(filter).skip(offset).limit(limit).exec();
        } else {
            customers = await Customer.find();
        }
        return customers.length > 0 ? customers : [];
    } catch (err) {
        console.error(err);
        return null;
    }
};

const updateCustomer = async (id, body) => {
    try {
        const { name, email, address } = body;
        const result = await Customer.updateOne({ _id: id }, { name, email, address });
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const deleteCustomer = async (id) => {
    try {
        const result = await Customer.deleteById(id);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const deleteManyCustomers = async (customerIds) => {
    try {
        const result = await Customer.delete({ _id: { $in: customerIds } });
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

module.exports = {
    createCustomer,
    createManyCustomer,
    getListCustomer,
    updateCustomer,
    deleteCustomer,
    deleteManyCustomers,
};
