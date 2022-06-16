# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

1. Start by setting up your project environment.
1.1 Make sure Node is installed from the terminal: 
    node --version
1.2 Install the packages Express, Body-Parser, and Cors from the terminal: 
    npm install express/cors/body-parser
1.3 And them include them your server.js file: 
    const e/c/b = require('express/cors/body-parser') + app.use(e,c,b())
1.4 Create a server running on the port of your choosing - 
    const port=8000 + const server = app.listen(port, listening)
1.5 Add a console.log() to the server callback function, and test that your server is running using Node in the terminal to run the file server.js: 
    function listening( {console.log(port)})

2. Add a GET route that returns the projectData object in your server code 
    app.get('/projectData', function sendData(req, res) {res.send(projectData);});
2.1 Then, add a POST route that adds incoming data to projectData. The POST route should anticipate receiving three pieces of data from the request body (temperature, date, user response)  Make sure your POST route is setup to add each of these values with a key to projectData.
    app.post('/projectData', function(req, res) { projectData.push(req.temperature/date/userRes);});

3. Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
    let apiKey = '364a2e645991f88d9a7e688ad466b437';
    let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
3.1 Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
    const getWeather = async (baseURL, animal, key)=>{
    const res = await fetch(baseURL+animal+key)
    try {
        const data = await res.json();
    }  catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
    }
3.2 Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
document.getElementById('generate').addEventListener('click', performAction);
Inside that callback function call your async GET request with the parameters: base url; user entered zip code (see input in html with id zip); personal API key
    function performAction(e){
        const zip =  document.getElementById('zip').value;
        getWeather(baseURL, zip, apiKey);
    }


4. After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app. 
    //After obtaining data inside the getWeatherfunction:
    // 1. chain promises
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
    let temp = data.main.temp;
    let feelings = document.getElementById('feelings').value;

    const output = {
        temp: temp,
        date: newDate,
        feelings: feelings,
    }
    //2 post output
    await postData("http://localhost:8000/projectData", output);

4.1 You will need to write another async function to make this POST request. The function should receive a path and a data object. The data object should include temperature, date and user response

    const postData = async ( url = '', data = {})=>{
        //console.log(data)
        const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
    });

        try {
        const newData = await response.json();
        console.log(newData);
        return newData;
        }catch(error) {
        console.log("error", error);
        }
  }

5. Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. 
    After p.3 post output, inside the getWeather function
    //3. Update UI
    updateUI(); 

5.1 This function should retrieve data from our app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for: Temperature, Date and User input
    const updateUI = async () => {
        const request = await fetch('http://localhost:8000/projectData');
        try{
            const allData = await request.json();
            document.getElementById('date').innerHTML = allData[0].date;
            document.getElementById('temp').innerHTML = allData[0].temp;
            document.getElementById('feelings').innerHTML = allData[0].feelings;

        }catch(error){
            console.log("error", error);
        }
    }

