function myfunction() {
    var city = prompt("please enter your city")
    if (city === "karachi") {
        alert("welcome to the city of light");
    }
    else {
        alert("its a very beutifull city");
    }
}
function myfunction2() {
    var gender = prompt("please let us know your gender").toLowerCase();
    if (gender === "male") {
        alert("Good morning sir!")
    }
    else if (gender === "female") {
        alert("Good morning Maam!")
    }
}
function myfunction3() {
    var fuelChecking = prompt("Tell us your car's fuel status(in numeric value)");
    var unit = "Litters"
    if (fuelChecking <= 0.25) {
        alert("you are running out of fuel")
    }
    else if (fuelChecking !== 0.25 || fuelChecking > 0.25) {
        alert("keep going! you have enough " + unit + "of fuel to tavel more")
    }
    else {
        alert("ups! it look like that you haven't enter valid input")
    }
}
function myfunction4() {
    var secrateNumber = 6;
    var inputNumber = parseInt(prompt("plese guess the number between 1 to 10"));
    if (inputNumber === secrateNumber) {
        alert("“Bingo! Correct answer”")
    }
    else if (inputNumber === secrateNumber + 1) {
        alert("“Close enough to the correct answer”")
    }
    else {
        alert("better luck next time")
    }
}

function myfunction5() {
    var inputNumber = prompt("please enter any number between 1 to 10");
    var division = 3;
    var result = inputNumber % division;
    if (result === 0) {
        alert("yes! this number is dividable by 3")
    }
    else {
        alert("sorry this number is not dividable by 3")
    }
}

function myfunction6() {
    var userNumber = prompt("please enter eny number");
    var division = 2;
    var result = userNumber % division;
    if (result === 0) {
        alert("This is an even number");
    }
    else {
        alert("This is a odd number");
    }
}

function myfunction7() {
    var userTemprature = parseInt(prompt("please enter the temprature of your area"));
    var finalValueTamprature = userTemprature;
    if (finalValueTamprature >= 40) {
        alert("its too hot outside")
    }
    else if (finalValueTamprature >= 30) {
        alert("its normal temprature out side")
    }
    else if (finalValueTamprature >= 20) {
        alert("its cold out side")
    }
    else {
        alert("its so cold out side")
    }
}

function myfunction8() {
    var numberByUser = parseInt(prompt("please enter first number"));
    var numberByUser2 = parseInt(prompt("please enter second number"));
    var operater = prompt("please enter the operater to apply on numbers(e.g: %,/,+,-")
    var numbersToOperatiion = numberByUser + numberByUser2;
    if (operater === "+") {
        alert(numberByUser + numberByUser2);
    }
    else if (operater === "-") {
        alert(numberByUser - numberByUser2);
    }
    else if (operater === "/") {
        alert(numberByUser / numberByUser2);
    }
    else if (operater === "%") {
        alert(numberByUser % numberByUser2);
    }
    else if (operater === "*") {
        alert(numberByUser * numberByUser2);
    }

    else {
        alert("please enter a valid operater");
    }
}