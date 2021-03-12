import React from 'react'

function WeatherList(props) {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="weather-result text-center mb-3">
                <div className="card-body">
                    <h4 className="card-date">{props.date}</h4>
                    <h4 className="card-icon"><img src={props.iconImg} alt=""/></h4>
                    <h5 className="card-text">{props.text}</h5>
                    <h5 className="card-mintemp">Min Temp: {props.minTemp} °C</h5>
                    <h5 className="card-maxtemp">Max Temp: {props.maxTemp} °C</h5>
                </div>
            </div>
        </div>
    )
}

export default WeatherList;
