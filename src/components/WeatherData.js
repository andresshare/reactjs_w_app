import React from 'react'

import WeatherExtraInfo 
from './weatherExtraInfo'

import WeatherTemperature 
from './weatherTemperature'

const WeatherData = () => (
    <div>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtraInfo></WeatherExtraInfo>
        
    </div>
)

export default WeatherData