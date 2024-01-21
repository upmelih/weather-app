import { indexOf } from 'lodash'
import './WeatherDisplay.css'
import locations from './locations.json'

const firstDisplayObj =locations.find(item => item.city === "New York")





function WeatherDisplay() {
    
    return( <>
        <div className='weather-display'>
               <h1 className='city'>{firstDisplayObj.city}</h1>
               <p className='weather-info'>{firstDisplayObj.temperature}</p>
               <h1 className='weather-info'>{firstDisplayObj.weather}</h1>
               
               
        </div>
    
        <div>
        <input type="text" name="" id="search-city" />
        <button type="button"  >Search</button>
        </div>
        
       
    
        </>)

}

export default WeatherDisplay