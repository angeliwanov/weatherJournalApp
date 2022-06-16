// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
// Setup Server
const server = app.listen(port, function listening() {
    console.log(`server is running on local port ${port}`);
});


// add Get route that returns projectData
app.get('/projectData', function sendData(req, res) {
    res.send(projectData);
});

//add POST requrest that adds temperature, date and user response to projectData
app.post('/projectData', function(req, res) {
    projectData = {
        'temperature': req.body.temperature,
        'date': req.body.date,
        'userResponse': req.body.userResponse};
});



