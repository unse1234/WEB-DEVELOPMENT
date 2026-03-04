// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
// let correctPassword = "password123";
// let attempts = 0;
// let maxAttempts = 3;       
// while (attempts < maxAttempts) {
//     let userInput = prompt("Enter your password:"); 
//     if (userInput === correctPassword) {
//         alert("Access granted!");
//         break; 
//     } else {
//         attempts++;
//         alert("Incorrect password. Try again.");
//     } 
// }
// if (attempts === maxAttempts) {
//     alert("Account locked.");
// }




// Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
// let yesCount = 0;
// while (true) {

//     let userInput = prompt("Enter a word (type 'stop' to end):");
//     if (userInput === "stop") {
//         break;
//     } else if (userInput === "yes") {
//         yesCount++;
//     }
// }
// alert("You typed 'yes' " + yesCount + " times.");







// Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let i=1;i<=50;i++){
//     if(i%7===0){
//         console.log(i);
//     }
// }


// Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;
// for(let i=1;i<=30;i++){
//     if(i%2!==0){
//         sum+=i;
//     }
// }
// console.log("Sum of odd numbers from 1 to 30 is: " + sum);









//  Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// while (true) {
//     let userInput=prompt("Enter a number (even number to stop):");
//     if (userInput % 2 === 0) {
//         alert("You entered an even number. Stopping.");
//         break;
//     } else {
//         alert("That's an odd number. Try again.");
//     }}



//  Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = parseInt(prompt("Enter the starting number:"));
// let end = parseInt(prompt("Enter the ending number:")); 
// for (let i = start; i <= end; i++) {
//     console.log(i);
// }

// Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let oddCount = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         oddCount++;
//         if (oddCount === 3) {
//             break;
//         }
//     }
// }



//  Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let positiveCount = 0;
// for (let i = 0; i < 5; i++) {
//     let userInput = parseFloat(prompt("Enter a number:"));  
//     if (userInput > 0) {
//         positiveCount++;
//     }
// }
// alert("You entered " + positiveCount + " positive numbers.");

// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let balance = 1000;
// for (let i = 0; i < 3; i++) {
//     let withdrawalAmount = parseFloat(prompt("Enter withdrawal amount:")); 
//     if (withdrawalAmount <= balance) {
//         balance -= withdrawalAmount;
//         alert("Withdrawal successful. Remaining balance: ₹" + balance);
//     } else {
//         alert("Insufficient balance. Remaining balance: ₹" + balance);
//     }}


// for (var i = 0; i < 5; i++) {
// console.log(i);
// }
// function add(a=0,b=0,c=0,d=0)
// { 
//     return a+b+c+d;
// }
// console.log(add(1)(2)(3) == 6);     
// console.log(add(5)(10) == 15);      
// console.log(add(2)(3)(4)(5) == 14);





// question 1**************************


// function sayhello()
// {
//     console.log("hello");
// }

// sayhello();


// ******************Question 2********************

// let a=5;
// let b=8;

// function add ()
// {
//     console.log(a+b);
//     return a+b;
// }

// let sum=add();

// console.log(sum);


// ********************Question 3************************

// function hi(name="guset"){
//     console.log(`hi ${name}`)
// }



// hi();
// hi("unse");


// ***********************Qusetion 4*********************
// Use rest parameters to make a function that adds unlimited numbers.
// let sum=0;
// function add(...val){
//     val.forEach(function(num){
//         sum +=num;
//     });
// }


// add(1,1,2,2,2,2,1,1,1,1,1,1);
// console.log(sum);


// ******************Question 5*******************
// IFFE funtion 

// (function()
// {
//     console.log("i run immediately");
// })();


//  Write a function `sayHello()` that prints `"Hello JavaScript"`.
// 2. Create a function `add(a, b)` that returns their sum and log the result.
// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
// 4. Use rest parameters to make a function that adds unlimited numbers.
// 5. Create an IIFE that prints `"I run instantly!"`.
// 6. Make a nested function where the inner one prints a variable from the outer one.
// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
// 8. Use a `for` loop to print all elements of an array.
// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.


// ******************Qusetion 6***********************
// function print()
// {
//     let a=5;

//     function hulu()
//     {
//         console.log(a);
//     }
//     hulu();
// }

// print();


// *********************Question 7 & 8*************************
// let arr = ["mango", "strawberry", "banana", "apple", "grape"];

// console.log(arr);
// arr.push("blue berry");
// console.log(arr);
// arr.shift();
// console.log(arr);

// for( let i=0; i<arr.length;i++)
// {
//     console.log(arr[i]);
// }




// ********************* Question 9 *************************
// let person={
//     name:"unse",
//     age: 21,
//     city: "rawalpindi"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// ********************* Question 10 *************************

function timeout()
{
    setTimeout(()=>{
        console.log("time is out!!!!!!!!");
    },2000)
}

timeout();