const db = require('./db');

exports.getAll = (callback) => {
    db.query("SELECT * FROM cars", callback);
};

exports.add = (data, callback) => {
    const sql = "INSERT INTO cars (name, type, price) VALUES (?, ?, ?)";
    db.query(sql, [data.name, data.type, data.price], callback);
};

exports.delete = (id, callback) => {
    const sql = "DELETE FROM cars WHERE id=?";
    db.query(sql, [id], callback);
};
