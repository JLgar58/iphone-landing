/* Here are some examples & exercises 
from JavaScript modules to improve our knoledge */

// alert("Hello");
// alert("World!");
// console.log("dot");
// var myName = "José";
// alert(myName);
// var yourName = prompt("What\'s your name: ");
// alert("Welcome! my name is: " + myName + " and welcome: " + yourName + " to join in this course");
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
// alert("Hello"+" "+"World!")

// String's "CONCAT"
// var message = "Hello";
// var name = prompt("Say your name: ")
// alert(message + " " + name + "!")

// String's "LENGTH"
// var text = prompt("Type something...");
// var total_length = 280;
// var user_input = text.length;
// characters_remain = total_length - user_input;
// alert("You have written: " + user_input + " characters," + " you have: " + characters_remain + " characters left")

// String's "SLICE"
// var text = prompt("Type something...");
// var total_length = 140;
// var user_input = text.length;
// characters_remain = total_length - user_input;
// alert(text.slice(0,characters_remain) + "...")
// console.log(text.slice(0,characters_remain) + "...")
// console.log(text.slice(characters_remain, user_input))
// alert("You have written: " + user_input + " characters," + " you have: " + characters_remain + " characters left")
// console.log("You have written: " + user_input + " characters," + " you have: " + characters_remain + " characters left")

// String's "toUpperCase"
// var yourName = prompt("What\'s your name: ");
// yourName = yourName.toLowerCase();
// var name_slice = yourName.slice(0,1);
// yourName = name_slice.toUpperCase() + yourName.slice(1,yourName.length);
// alert("Welcome! my name is: José" + " and welcome: " + yourName + " to join in this course");


// Basic Arithmetic % Modulo Operator
// var dogAge = prompt("Please type the age of the dog:");
// var humanAge = (((dogAge -2 ) * 4) + 21);
// alert("Your dog in Human age are: " + humanAge) // console.log()
// var x = 3;
// var y = x++;
// y += 1;

// Functions
// function getMilk(money) {
//     var cost = Math.floor(money / 1.5);
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("You can buy " + cost + " bottles of Millk");
//     alert("You can buy " + cost + " bottles of Millk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     // alert("Arriving to the house");
//     return money % 1.5
// }
// getMilk(10);

// Challenge
// var age = prompt("Say your age:");
// const highest_days = 90 * 365
// const highest_weeks = 90 * 52
// const highest_months = 90 * 12

// let days = Math.floor(age * 365);
// var x = highest_days - days;

// let weeks = Math.floor(age * 52);
// var y = highest_weeks - weeks;


// let months = Math.floor(age * 12);
// var z = highest_months - months;

// console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
// alert("You have " + x + " days, " + y + " weeks, and " + z + " months left.");

// Challenge 2
// function bmiCalculator(weight, height) {
//     // var height = height;
//     // var weight = weight;
//     height *= height
//     // result = Math.floor(weight/height);
//     return Math.floor(weight/height);
//     // return result;
// }
// bmiCalculator(99, 1.81);

// Random number generator
// personA = prompt("What's your name:");
// personB = prompt("What's your crush name?");
// var n = Math.random();
// n *= 100
// n = Math.floor(n) + 1;
// //alert(n)
// console.log(n)
// if (n > 70){
//     alert("your love score for " + personA + ' & ' + personB + ' is: ' + n + "% You Look good together! ❤️ I'm So jelaous!!");
// }
// if (n > 30 && n <= 70) {
//     alert("your love score for " + personA + ' & ' + personB + ' is: ' + n + "% You Look good! 😊😍");
// }
// if (n <= 30) { //else
//     alert("Love score: " + n + '% 😒')
// }
// Challenge 3
// function bmiCalculator(weight, height) {
//     height *= height;
//     //console.log(height)
//     bmi = Math.floor(weight/height);
//     //console.log(bmi);

//     if (bmi < 18.5) { //# Under 18.5 they are underweight
//     //print(f"Your BMI is {bmi}, you are underweight.") # "Your BMI is 18, you are underweight."
//         interpretation = "Your BMI is " + bmi + ", you are underweight."; //# "Your BMI is 18, you are underweight."
//     }
//     if (bmi >= 18.5 && bmi < 24.9) { //# Over 18.5 but below 25 they have a normal weight
//     //print(f"Your BMI is {bmi}, you have a normal weight.") # "Your BMI is 22, you have a normal weight."
//         interpretation = "Your BMI is " + bmi + ", you have a normal weight."; //# "Your BMI is 22, you have a normal weight."
//     }
//     if (bmi >= 25) { //# Over 25 but below 30 they are slightly overweight
//     //print(f"Your BMI is {bmi}, you are slightly overweight.") # "Your BMI is 28, you are slightly overweight."
//         interpretation = "Your BMI is " + bmi + ", you are slightly overweight."; //# "Your BMI is 28, you are slightly overweight."
//     }

//     return interpretation;
// }
// bmiCalculator(99, 1.81);
// Leap year Challenge
// function Leap(year) {
//     var c1 = year % 4
//     console.log(c1)
//     var c2 = year % 100
//     console.log(c2)
//     var c3 = year % 400
//     console.log(c3)

//     if (c1 === 0 && c2 !== 0) {
//         return 'Leap year.';
//     } else if (c1 === 0 && c2 === 0 && c3 === 0) {
//         return 'Leap year.';
//     } else {
//         return 'Not leap year.';
//     }
// }
// Leap(1989);
