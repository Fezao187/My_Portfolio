document.getElementById("myName").innerHTML += " Maredi";

let item1;
let item2;
let item3;

document.getElementById("changeList").onclick = newlist;

function newlist()
{
    document.getElementById("firstThing").innerHTML = prompt("Enter new first thing: ");
    document.getElementById("secondThing").innerHTML = prompt("Enter new second thing: ");
    document.getElementById("thirdThing").innerHTML = prompt("Enter new third thing: ");
    //updateList();
}

// function updateList()
// {
//     document.getElementById("firstThing").innerHTML = item1;
//     document.getElementById("secondThing").innerHTML = item2;
//     document.getElementById("thirdThing").innerHTML = item3;
// }