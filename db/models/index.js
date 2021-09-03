const mysql = require("mysql");

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'bestbuy',
})

const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        db.query(query, values, (err, result) => {
            if(err){
                reject(err);
            }
            resolve(result);
        })
    })
};

module.exports = Query;