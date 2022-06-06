# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

1. Start by setting up your project environment.
- Make sure Node is installed from the terminal: node --version
- Install the packages Express, Body-Parser, and Cors from the terminal: npm install express/cors/body-parser
- and them include them your server.js file: const e/c/b = require('express/cors/body-parser') + app.use(e,c,b())
- Create a server running on the port of your choosing - const port=8000 + const server = app.listen(port, listening)
- Add a console.log() to the server callback function, and test that your server is running using Node in the terminal to run the file server.js: function listening( {console.log(port)})

2. Add a GET route that returns the projectData object in your server code 
- app.get('/all', function sendData(req, res) {res.send(projectData);});
Then, add a POST route that adds incoming data to projectData. The POST route should anticipate receiving three pieces of data from the request body (temperature, date, user response)
Make sure your POST route is setup to add each of these values with a key to projectData.
- app.post('/animal', function(req, res) { projectData.push(req.temperature/date/userRes);});

3. Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
Inside that callback function call your async GET request with the parameters:
base url
user entered zip code (see input in html with id zip)
personal API key