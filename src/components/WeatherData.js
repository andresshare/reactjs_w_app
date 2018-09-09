import React from 'react'

import WeatherExtraInfo 
from './weatherExtraInfo'

import WeatherTemperature 
from './weatherTemperature'

import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} 
from './../constants/weathers'

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={SNOW} ></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10/ms"} > </WeatherExtraInfo>
        
    </div>
)

export default WeatherData