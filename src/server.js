require('dotenv').config();
const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const apiRouters = require('./routes/api');
const testDbRoute = require('./routes/test_db_connection');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');
const port = process.env.PORT || 3001;
configViewEngine(app);
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use('/', webRouters);
app.use('/api/v1', apiRouters);
app.use('/test_db', testDbRoute);

(async () => {
    try {
        //Using mongoose
        await connection();

        //Using mongodb driver
        // const url = process.env.MONGODB_DRIVER_URL;
        // const client = new MongoClient(url);
        // const dbName = process.env.DB_NAME;
        // await client.connect();
        // console.log('Connected successfully to server');
        // const db = client.db(dbName);
        // const collection = db.collection('customers');
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log('Error', error);
    }
})();
