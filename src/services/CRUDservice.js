const connection = require("../config/database")

const getAllUser = async () => {
    let [results, fields] = await connection.query('select * from Users ');

    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection
        .query('select * from Users u where u.id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

module.exports = {
    getAllUser, getUserById
}