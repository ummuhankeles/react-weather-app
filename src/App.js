import React,{ useState } from 'react';
import WeatherList from './components/WeatherList';
import './App.css';
import SearchBar from './components/SearchBar';
import Clock from './components/Clock';

function App() {
  
  let inputValue = "";
  const WEATHER_API = "3b6b50e42cb94c36820142404211103"
  const [weatherData, setWeatherData] = useState([]);

  async function showWeatherDays() {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API}&q=${inputValue}&days=7&aqi=no&alerts=no`)
    const result = await data.json();
    setWeatherData(result.forecast.forecastday);
    console.log(result.forecast.forecastday);
  }

  function searchCityItem (event) {
    inputValue = event.target.value;
  }

  return (
    <div className="container">

      <div className="row mb-2 text-center text-white mt-5">
        <div className="col-lg-12">
          <h1 className="mb-3">Three Days Weather Forecast</h1>
          <h4>- Search City and Learn Weather Forecast -</h4>
        </div>
      </div>

      <div className="row">
        <Clock/>
      </div>

      <div className="row mb-5">
        <SearchBar showList={showWeatherDays} searchCity={searchCityItem}/>
      </div>

      <div className="row mb-5">
        {
          weatherData.map((item,index) =>
            (<WeatherList key={index} date={item.date} iconImg={item.day.condition.icon}
                          text={item.day.condition.text} minTemp={item.day.mintemp_c} maxTemp={item.day.maxtemp_c}
            />)
          )
        } 
      </div> 

    </div>
  );
}

export default App;
