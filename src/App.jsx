import { useState } from 'react'

import './App.css'
import WeatherDisplay from './WeatherDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      this is app
      <h1 className='title'>this is title</h1>
      <WeatherDisplay/>
      
    </div>
  )
}

export default App
