import React, { useState } from 'react';
import './WeatherDisplay.css';
import locations from './locations.json';

function WeatherDisplay() {
    // Set initial state for the display object
    const [displayObj, setDisplayObj] = useState(locations.find(item => item.city === "New York"));

    function searchFunc() {
        // Get the input element's value
        const inputElement = document.getElementById('search-city');
        const searchString = inputElement.value;

        // Find the location data based on searchString
        const searchedDataObj = locations.find(item => item.city.toLocaleLowerCase() === searchString.toLocaleLowerCase());

        // Update the display object state
        if (searchedDataObj) {
            setDisplayObj(searchedDataObj);
        } else {
            console.log('City not found'); // Handle the case where the city is not found
            // Optionally, clear the display or show some error message
            setDisplayObj(null);
        }
    }

    return (
        <>

            <div>
                <input type="text" id="search-city" />
                <button type="button" onClick={searchFunc}>Search</button>
            </div>

            <div className='weather-display'>
                {displayObj ? (
                    <>
                        <h1 className='city'>{displayObj.city}</h1>
                        <p className='weather-info'>{displayObj.temperature}</p>
                        <h1 className='weather-info'>{displayObj.weather}</h1>
                    </>
                ) : (
                    <p>City not found. Please try another search.</p>
                )}
            </div>

           
        </>
    );
}

export default WeatherDisplay;
