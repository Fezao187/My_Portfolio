"use strict";

//An array of the days of the week
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//An array of the weather
let weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

//Variables to hold min/max temps
let minTemp = 0,
    maxTemp = 100;

//Calling the weather function
generateWeather();

//A function to generate weather
function generateWeather()
{
    //A function that loops through the days of the week
    for(let i = 0; i < days.length; i++)
    {
        //Getting a random element in the weather array
        let weatherToday = weather[Math.floor(Math.random() * weather.length)],
        //Random temparature between the two temp values
            tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        //Using inner HTML to out put the temps and weather
        document.getElementById("5DayWeather").innerHTML += "<div id='" + 
        days[i] + "' class='" + weatherToday + 
        "'><b>Forecast for " + days[i] + ":</b><br><br>" + 
        weatherToday + " and " + tempToday + " degrees.</div>";
    }
}