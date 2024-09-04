const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4200;
const hostname = process.env.HOST_NAME;
require('dotenv').config();


console.log(">>> check env: ", process.env);

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', '/ejs');

app.get('/anh_cong', (req, res) => {
    //res.send('Hello world');
    res.render('sample.ejs')
});

app.listen(port, () => {
    console.log(`Exam app listening on port ${port}`);
});