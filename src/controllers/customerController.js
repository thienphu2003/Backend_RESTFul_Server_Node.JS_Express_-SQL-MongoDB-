const {
    createCustomer,
    createManyCustomer,
    getListCustomer,
    updateCustomer,
    deleteCustomer,
    deleteManyCustomers,
} = require('../services/customerService');
const { uploadFile } = require('../services/fileService');

module.exports = {
    createCustomer: async (req, res) => {
        const { name, email, address, phone, description } = req.body;
        let imageUrl = '';
        if (!req.files || Object.keys(req.files).length === 0) {
            // return res.status(400).send('No files were uploaded.');
        } else {
            const { image } = req.files;
            const result = await uploadFile(image);
            imageUrl = result?.path;
        }

        const customerData = {
            name,
            email,
            address,
            phone,
            description,
            image: imageUrl,
        };

        const result = await createCustomer(customerData);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },

    createManyCustomer: async (req, res) => {
        const customers = await createManyCustomer(req.body.customers);
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers,
            });
        } else {
            return res.status(400).json({
                EC: -1,
                data: customers,
            });
        }
    },
    getListCustomer: async (req, res) => {
        let result;
        const { limit, page } = req.query;
        if (limit && page) {
            result = await getListCustomer(limit, page);
        } else {
            result = await getListCustomer();
        }

        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    updateCustomer: async (req, res) => {
        const id = req.params.id;
        const result = await updateCustomer(id, req.body);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    deleteCustomer: async (req, res) => {
        const id = req.params.id;
        const result = await deleteCustomer(id);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    deleteManyCustomers: async (req, res) => {
        const ids = req.body.customerIds;
        console.log(ids);
        const result = await deleteManyCustomers(ids);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
};
