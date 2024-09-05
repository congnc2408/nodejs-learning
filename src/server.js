const express = require('express');
const configViewEngine = require('./config/viewEngine');
const app = express();
require('dotenv').config();
const webRoutes = require('./routes/web');

const port = process.env.PORT || 4200;
const hostname = process.env.HOST_NAME;

console.log(">>> check env: ", process.env);
//config template engine
configViewEngine(app);

app.use('/', webRoutes);
app.listen(port, hostname, () => {
    console.log(`Exam app listening on ${hostname}:${port}`);
});