/*********************************************** */
// Array map
/*********************************************** */

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

// nums.forEach((number) => {
//   return number * 2;
// })

const multiplyByTwo = (number) => number * 2;


const numsMultiplyByTwo = nums.map(multiplyByTwo)

console.log('numb ==> ', nums);
console.log('numsMultiplyByTwo --> ', numsMultiplyByTwo)

const stringWithSingleQuotes = 'Martyn';
const stringWithDoubleQuotes = "Pedro"; 

/*********************************************** */
// Array destructuring
/*********************************************** */

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// const pineapple = pizzaToppings[0];
// const olives = pizzaToppings[1];
// const anchovies = pizzaToppings[2];

const [pineapple, olives, anchovies] = pizzaToppings

console.log(pineapple, olives, anchovies);


// Your code here

/*********************************************** */
// Array spread operator
/*********************************************** */
// Duplicate the following array using the spread operator and assign it to 
// `controversialPizzaToppings`.Then, log the variable.

// const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const controversialPizzaToppings = [...pizzaToppings, 'chocoloate'];
console.log({ controversialPizzaToppings });

// Your code here

/*********************************************** */
// Object spread operator
/*********************************************** */

// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
	make: "Audi",
	model: "q5",
};

const { make: manufacturer, model } = car;

console.log('manufacturer ==> ', manufacturer);
console.log('model ==> ', model);

const racingCar = { ...car, topSpeed: 400 };
console.log({ racingCar });



// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

/*********************************************** */
// Dynamic keys in objects
/*********************************************** */

// Create an object named userProfile.

const userProfile = {};

// Define a variable named propertyName and assign a string to it (like a username, age, or email).

const propertyName = 'username';

// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const anotherUserProfile = {
  ...userProfile,
  [propertyName]: 'pataruco',
}

console.log({
  userProfile, 
  anotherUserProfile,
})

// Your code here

/*********************************************** */
// Default paramaters
/*********************************************** */
function addThreeNumbers(numA, numB = 2, numC = 1) {
  return numA + numB + numC;
}

addThreeNumbers(2);

console.log('addThreeNumbers ---> ', addThreeNumbers(2));


// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

/*********************************************** */
// Ternary operator
/*********************************************** */
// Convert the following `if...else` statement in to a ternary:

const pizza = "tasty";

if (pizza === "tasty") {
	console.log("yum");
} else {
	console.log("yuck");
}

const isTasty = pizza === 'tasty' ? 'yum' : 'yuck';
console.log({ isTasty });

// const pedro = 'pedro';
// pedro = 'james';

const fruits = ['oranges', 'apples'];
fruits.push('strawberries');

console.log({ fruits });

let pedro = 'pedro';
pedro = 'james';

// Your code here

/*********************************************** */
// Boolean gates
/*********************************************** */
const result1 = "bar" && "foo";
const result2 = false || 243;
const result3 = 42 && false;
const result4 = undefined || 3000;

console.log({ result1, result2, result3, result4 });

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:

// "LANG is equal to localLangConfig or the default value of English."
// Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

// Log the result

// 2. SET WEBSITE THEME

// Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here

// Log the result

/*********************************************** */
// Optional chaining
/*********************************************** */
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
	name: "Alice",
};

let cat;

// Your code here

console.log(cat);
