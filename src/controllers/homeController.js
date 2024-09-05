const getHomepage = (req, res) => {
    res.send('Hello world!!');
}
const getHoiCong = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getHoiCong
}