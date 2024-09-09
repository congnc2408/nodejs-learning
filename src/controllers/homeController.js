const connection = require('../config/database')

const getHomepage = (req, res) => {
    // let users = []
    // connection.query(
    //     'select * from Users u',
    //     function (err, results, fields) {
    //         users = results
    //         // console.log("field= ", fields);
    //         res.send(JSON.stringify(users));
    //     }
    // )
    return res.render('homepage.ejs')

}
const getHoiCong = (req, res) => {
    res.render('sample.ejs')
}


const postCreateUser = (req, res) => {
    console.log('req body: ', req.body)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    //res.send('create new user')
    connection.query(
        `INSERT INTO Users(email, name,city) 
        VALUES(?,?,?)`, [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('success')
        }
    )
}


module.exports = {
    getHomepage,
    getHoiCong,
    postCreateUser
}