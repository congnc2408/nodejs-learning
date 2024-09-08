const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = []
    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            users = results
            // console.log("field= ", fields);
            res.send(JSON.stringify(users));
        }
    )

}
const getHoiCong = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getHoiCong
}