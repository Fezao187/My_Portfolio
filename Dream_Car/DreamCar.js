var dreamCar = {
    make: "Honda",
    model: "NSX",
    color: "purple",
    year: 1990,
    bodyStyle: "SuperCar",
    price: 45000
 }

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;