"use strict";

// listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
    // get form values
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    let birthday = document.getElementById("birthday").value;

    // get the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);

    // get the delivery price
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    // create the output
    var theOutput = "<p>Thank you for your order.</p>";

    // todo: output the delivery price, if there is one
    if(deliveryPrice === 0)
    {
        theOutput += "<p>You get free delivery!</p>";
    }
    else
    {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice;
    }

    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);

    // display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    // todo: calculate extraCharge, if there is one.
    if(typePizza === "supreme")
    {
        extraCharge = Number(numPizzas) * 2;
    }
    else if(typePizza === "seafood")
    {
        //I added a few more pizzas
        extraCharge = Number(numPizzas) * 9;
    }
    else if(typePizza === "beefRib")
    {
        extraCharge = Number(numPizzas) * 4;
    }
    else if(typePizza === "nachoCheese")
    {
        extraCharge = Number(numPizzas) * 6;
    }

    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    var deliveryPrice = 0;

    // todo: calculate delivery price, if there is one
    if((deliveryCity === "Anytown") && (orderPrice > 10) || (birthday === "yes"))
    {
        deliveryPrice = 0;
    }
    else
    {
        deliveryPrice = 5;
    }

    return deliveryPrice;
}