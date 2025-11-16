const Booking = require('../models/bookingModel');

exports.createBooking = (req, res) => {
    Booking.create(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getUserBookings = (req, res) => {
    Booking.getByUser(req.params.userId, (err, bookings) => {
        if (err) return res.status(500).json(err);
        res.json(bookings);
    });
};
