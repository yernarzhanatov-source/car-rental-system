const db = require('./db');

exports.register = (data, callback) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [data.name, data.email, data.password], callback);
};

exports.login = (data, callback) => {
    const sql = "SELECT * FROM users WHERE email=? AND password=?";
    db.query(sql, [data.email, data.password], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};
