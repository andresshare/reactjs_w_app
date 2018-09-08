import React from 'react'

import WeatherExtraInfo 
from './weatherExtraInfo'

import WeatherTemperature 
from './weatherTemperature'

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} ></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10/ms"} > </WeatherExtraInfo>
        
    </div>
)

export default WeatherData