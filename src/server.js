require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRouters = require("./routes/web");
const testDbRoute = require("./routes/test_db_connection");
const connection = require("./config/database");

const port = process.env.PORT || 3001;
configViewEngine(app);
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use("/", webRouters);
app.use("/test_db", testDbRoute);

(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error", error);
  }
})();
