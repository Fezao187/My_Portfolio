"use strict";

/*
todo: create three global variables:
* trainSpeed (initial value = 250)
* trainPosition (initial value = 0)
* animation (no initial value)
*/
let trainSpeed = 250,   
    trainPosition = 0,
    animation;

/*
todo: listen for click events on the train element and call a function named speedUp when they happen. 
*/
let train = document.getElementById("train");
train.addEventListener("click", speedUp);

/*
todo: listen for click events on the stop button element and call a function called stopTrain when they happen. 
*/
let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    /* 
    todo: check whether the train is already going as fast as it can. If not, increase the speed.
    */
    if(trainSpeed > 10)
    {
        trainSpeed -= 10;
    }

    /*
    If the train is already moving, stop it and then restart with the new speed by calling a function called frame.
    */
    clearInterval (animation);
    animation = setInterval(frame, trainSpeed);

    function frame() {
        /* 
        reposition the train and check whether the train is crashed
        */
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    /*
    todo: check the train's current position and crash it if it's at the end of the line
    */
    if(currentPosition === 600)     //I have changed the stopping position
    {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    /* 
    todo: test whether the train is already crashed. If not, stop the train. 
    */
    if(trainPosition < 600)     //I have changed the stopping position
    {
        clearInterval(animation);
    }
}

