const connection = require('../config/database')
const { getAllUser } = require('../services/CRUDservice')
const getHomepage = async (req, res) => {
    // let users = []
    // connection.query(
    //     'select * from Users u',
    //     function (err, results, fields) {
    //         users = results
    //         // console.log("field= ", fields);
    //         res.send(JSON.stringify(users));
    //     }
    // )
    let result = await getAllUser()
    return res.render('homepage.ejs', { userLst: results });
}
const getHoiCong = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    console.log('req body: ', req.body)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    //res.send('create new user')
    // connection.query(
    //     `INSERT INTO Users(email, name,city) 
    //     VALUES(?,?,?)`, [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('success')
    //     }
    // );

    let [sersults, fields] = await connection.query(
        `INSERT INTO Users(email, name,city) 
        VALUES(?,?,?)`, [email, name, city]
    );
    res.send('created success!');

}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}


module.exports = {
    getHomepage,
    getHoiCong,
    postCreateUser,
    getCreatePage
}