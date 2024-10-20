const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// defining a route in Express
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

// Include route files
const testRoutes = require('./routes/testRoutes.js');

// Use routes
app.use('/test', testRoutes);

// specifying the port and starting the server
const port = process.env.PORT || 3001; // can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});