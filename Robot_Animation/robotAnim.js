// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("body").style.border = "2px black solid";
// document.getElementById("mouth").style.borderRadius = "4px";
// document.getElementById("righteye").style.border = "4px yellow dotted";
// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// document.getElementById("partArmLeft").style.backgroundColor = "#FF00FF";
// document.getElementById("muscleLeft").style.backgroundColor = "#FF00FF";
// document.getElementById("body").style.color = "#FF0000";
// document.getElementById("head").style.borderTop =  "5px black solid";
// document.getElementById("head").style.transform =  "rotate(15deg)";
// document.getElementById("head").style.transform =  "rotate(-15deg)";
// document.getElementById("nose").style.borderRadius = "60%";
// document.getElementById("rightarm").style.backgroundColor = "green";
// document.getElementById("partArmRight").style.backgroundColor = "green";
// document.getElementById("muscleRight").style.backgroundColor = "green";
// document.getElementById("mouth").style.backgroundColor = "pink";

//Animating the Robot

let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
let leftEye = document.getElementById("lefteye");
leftEye.onclick = moveUpDown;
let nose = document.getElementById("nose");
nose.onclick = moveNoseUpDown;
let leftArm = document.getElementById("leftarm");
leftArm.onclick = moveRightLeft;
let mouth = document.getElementById("mouth");
mouth.onclick = moveMouth;

function moveUpDown(event)
{
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame,100);
    function frame()
    {
        robotPart.style.top = t + "%";
        t++;
        if(t === 20)
        {
            clearInterval(animation);
        }
    }
}

function moveNoseUpDown(event)
{
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame,100);
    function frame()
    {
        robotPart.style.top = t + "%";
        t++;
        if(t === 51)
        {
            clearInterval(animation);
        }
    }
}

function moveRightLeft(event)
{
    let robotPart = event.target;
    let left = 0;
    let animation = setInterval(frame,20);
    function frame()
    {
        robotPart.style.left = left++ + "%";
        if(left === 71)
        {
            clearInterval(animation);
        }
    }
}

function moveMouth(event)
{
    let robotPart = event.target;
    let left = 0;
    let animation = setInterval(frame,20);
    function frame()
    {
        robotPart.style.left = left++ + "%";
        if(left === 21)
        {
            clearInterval(animation);
        }
    }
}