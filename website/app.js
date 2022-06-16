/* Global Variables */
let apiKey = '364a2e645991f88d9a7e688ad466b437';
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const zip =  document.getElementById('zip').value;
    getWeather(baseURL, zip, apiKey);
}

const getWeather = async (baseURL, zip, key)=>{

    const res = await fetch(baseURL+zip+',us&appid='+key);

    try {
        const data = await res.json();
        //console.log(data);
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
        //2. post output
        await postData("http://localhost:8000/projectData", output);
  
        //3. Update UI
        updateUI(); 
        
    } catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
    
}

const postData = async ( url = '', data = {})=>{
    console.log(data)
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
