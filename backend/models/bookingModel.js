const db = require('./db');

exports.create = (data, callback) => {
    const sql = "INSERT INTO bookings (userId, carId, dateFrom, dateTo) VALUES (?, ?, ?, ?)";
    db.query(sql, [data.userId, data.carId, data.dateFrom, data.dateTo], callback);
};

exports.getByUser = (userId, callback) => {
    db.query("SELECT * FROM bookings WHERE userId=?", [userId], callback);
};
