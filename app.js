const express = require('express');
const app = express();
const carsRoutes = require('./routes/cars');
const paymentRoutes = require('./routes/payment');
const authRoutes = require('./routes/auth');

// Middleware to parse JSON
app.use(express.json());

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the Car Rental Service API!');
});

// Use the defined routes
app.use('/cars', carsRoutes);
app.use('/auth', authRoutes);
app.use('/payment', paymentRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
