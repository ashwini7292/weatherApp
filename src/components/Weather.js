import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//actions
import FetchWeather from "../actions/FetchWeather.action";

export default function Weather(){
 
    const [city, setCity] = useState("");

    const weatherSelector = useSelector((state) => state)

    const dispatch = useDispatch();
    const getWeatherInfoAction = (city) => dispatch(FetchWeather(city))

    const getWeatherInfo = (e) => {
        e.preventDefault()
        if(city === ""){
            console.log("no city to search for")
        }else{
            getWeatherInfoAction(city)
            console.log("********",weatherSelector.weatherInfo.weatherinfo)
        }
    }

    let details = "";
    
    if(weatherSelector.weatherInfo.weatherinfo.main){
        details = <div>
            <h2>Weather details</h2>
            <p>Weather forecast for : <span>{weatherSelector.weatherInfo.weatherinfo.name}</span></p>
            <p>Temperature : {weatherSelector.weatherInfo.weatherinfo.main.temp}</p>
            <p>Humidity : {weatherSelector.weatherInfo.weatherinfo.main.humidity}</p>
            <p>Pressure : {weatherSelector.weatherInfo.weatherinfo.main.pressure}</p>
            <img src= {weatherSelector.weatherInfo.weatherinfo.weather.icon}/>
        </div>
    }else{
        details = <p>You need to add city </p>
    }

    return(
        <React.Fragment>
            <header>
                <h2>Weather App</h2>
            </header>
        <main>
            <form onSubmit={getWeatherInfo}>
                <div className="control">
                    <input type="text" name="name" placeholder="Name of city" onChange={e => setCity(e.target.value)}/>
                </div>
                <input type="submit" value="Check Weather"/>
            </form>
            {console.log(weatherSelector)}
            {details}
        </main>
        
        </React.Fragment>
    )
}


