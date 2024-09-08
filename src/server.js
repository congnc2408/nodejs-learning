require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const app = express();
const webRoutes = require('./routes/web');
const connection = require('./config/database')

const port = process.env.PORT || 4200;
const hostname = process.env.HOST_NAME;

// console.log(">>> check env: ", process.env);
//config template engine
configViewEngine(app);

app.use('/', webRoutes);



connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log("result= ", results);
        // console.log("field= ", fields);
    }
)



app.listen(port, hostname, () => {
    console.log(`Exam app listening on ${hostname}:${port}`);
});