const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');
const carRoutes = require('./routes/cars');
const bookingRoutes = require('./routes/bookings');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/cars', carRoutes);
app.use('/bookings', bookingRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Car Rental API is running" });
});

const PORT = 3306;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
