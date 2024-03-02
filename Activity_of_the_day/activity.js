"use strict";

var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // todo: find out the day of the week.
    let dayOfWeek = d.getDay();

    /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */
    let youShould;
    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You’ve earned it!";
            break;
        case 1:
            youShould = "Go to work. Handle buisness!";
            break;
        case 2:
            youShould = "Take the car to service.";
            break;
        case 3:
            youShould = "Learn JavaScript";
            break;
        case 4:
            youShould = "Go to gym";
            break;
        case 5:
            youShould = "Go to church";
            break;
        case 6:
            youShould = "Go to the doctor";
            break;
        default:
            youShould = "Something went wrong.";
            break;
    }
    
    // todo: output the value of youShould into the thingToDo div
    document.getElementById("thingToDo").innerHTML = youShould;
}