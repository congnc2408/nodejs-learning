const connection = require('../config/database')
const { getAllUser } = require('../services/CRUDservice')

const getHomepage = async (req, res) => {
    // let users = []
    // connection.query(
    //     'select * from Users u',
    //     function (err, results, fields) {
    //         users = results
    //         console.log("field= ", users);
    //         res.send(JSON.stringify(users));
    //     }
    // )
    // return res.render('homepage.ejs')
    let result = await getAllUser();
    return res.render('homepage.ejs', { userLst: result });
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

    let [sesults, fields] = await connection.query(
        `INSERT INTO Users(email, name,city) 
        VALUES(?,?,?)`, [email, name, city]
    );
    res.send('created success!');

}

const getEditPage = (req, res) => {
    res.render('edit.ejs');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}


module.exports = {
    getHomepage,
    getHoiCong,
    postCreateUser,
    getCreatePage,
    getEditPage
}