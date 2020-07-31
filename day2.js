/*
Exercise 1 ~ Day 2
Name: Aisha
Date: July 28, 2020
Purpose: to calculate the averages of a student in each of their classes and then output their overall average.
*/

//variable declaration
let mathAverage = (20/50) * 100;
let engAverage = (30/50) * 100;
let physAverage = (14/50) * 100;
let chemAverage = (48/50) * 100;
let accAverage = (50/50) * 100;

// print out each class average
console.log ("Your average in math is: " + mathAverage)
console.log ("Your average in english is: " + engAverage)
console.log ("Your average in physics is: " + physAverage)
console.log ("Your average in chemistry is: " + chemAverage)
console.log ("Your average in accounting is: " + accAverage)

// calculate and print out overall student average
let overallAve = (mathAverage + engAverage + physAverage + chemAverage + accAverage) /5;
console.log ("\nYour overall average is: " + overallAve);




/*
Exercise 2 ~ Day 2
Name: Aisha
Date: July 28, 2020
Purpose: to find and print the largest number out of the 5 given
*/

//variable declaration
let num1 = -900;
let num2 = 13.3298;
let num3 = 23;
let num4 = 1.0009;
let num5 = 32;

// check which number is greatest
if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5)
{
  console.log (num1 + " is the largest number!");
}
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5)
{
  console.log (num2 + " is the largest number!");
}
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5)
{
  console.log (num3 + " is the largest number!");
}
else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5)
{
  console.log (num4 + " is the largest number!");
}
else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4)
{
  console.log (num5 + " is the largest number!");
}





/*
Exercise 3 ~ Day 2
Name: Aisha
Date: July 28, 2020
Purpose: to check the sign of the product of 3 numbers and display it.
*/

//variable declaration
num1 = 78;
num2 = -56;
num3 = -900;

// calculate product of numbers
let numProduct = num1 * num2 * num3;

// check if product is +ve or -ve
if (numProduct >= 0) {
  console.log("The product's sign is +ve!");
}
else if (numProduct < 0) {
  console.log("The product's sign is -ve!");
}




/*
Exercise 4 ~ Day 2
Name: Aisha
Date: July 28, 2020
Purpose: to calculate and display the sum of the two pairs' products.
*/

//variable declaration
num1 = 5;
num2 = 10;
num3 = 3;
num4 = 6;

// calculate product of each pair
let product1 = num1 * num2;
let product2 = num3 * num4;

// calculate the sum of the 2 products
let numSum = product1 + product2;

// display the sum
console.log ("The sum of the products is " + numSum);
