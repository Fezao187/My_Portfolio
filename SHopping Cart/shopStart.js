var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    //console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(t) 
{
    //This function will remove items from the chopping cart
    //The if statement will ensure that it does not go to negative quantities
    if (quantities[t] <= 0 || totals[t] <= 0) 
    {
        //if the removed quantities go below zero, it will display zero
        quantities[t] = 0;
        totals[t] = 0;
    }
    else
    {
        console.log(t);
        quantities[t] = quantities[t] - 1;
        totals[t] = prices[t] * quantities[t];
        totalOrderAmt -= prices[t];
    }
    display_all();
}

//Creatinng a varibale to store our checkout button
let checkout = document.getElementById("checkout");
//The function below displays the total when clicked
checkout.onclick = function()
{
    document.getElementById("dispTotal").innerHTML = "Total: " + totalOrderAmt;
}

function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>REMOVE</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>REMOVE</button></td>";
    }

    myTable += "</table>";
    



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;

}


window.onload = function () {
    display_all();
}