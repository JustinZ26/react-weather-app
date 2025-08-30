import { useState, useEffect } from "react";
function App() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    async function getWeatherData(){
      try{
        // public API so its okay i guess??? fix later haha
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=46.9481&longitude=7.4474&current=temperature_2m%2Crelative_humidity_2m%2Crain%2Cweather_code");
        const weatherData = await response.json();
        setWeather(weatherData);
        console.log(weatherData);
      }
      catch(e){
        console.log(`error fetching data ${e}`)
      }
    }
    getWeatherData();
  }, []);


  return (
    <>
    <p>{weather ? weather.current.temperature_2m : "no data"}</p>
    <pre>{weather ? JSON.stringify(weather, null, 2) : "loading..."}</pre>
    </>
  )
}

export default App
