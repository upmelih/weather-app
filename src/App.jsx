import { useState } from 'react'

import './App.css'
import WeatherDisplay from './WeatherDisplay'

function App() {
  

  return (
    <div className='app'>
      
      <h1 className='title'>Weather App</h1>
      
      <WeatherDisplay/>
      
    </div>
  )
}

export default App
