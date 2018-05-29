const express = require('express');
const path = require("path");
const routes = require("./routes/routes");
const app = express();

routes(app);
app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server is up");
});