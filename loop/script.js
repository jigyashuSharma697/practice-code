// let age = prompt("Please enter your age:");
// if (age === null) {
//   console.log("User cancelled the prompt.");
// } else {
//   if (age.trim() === "") {
//     console.log("User entered an empty string.");
//   } else {
//     age = Number(age);
//     if (isNaN(age)) {
//       console.log("User entered a non-numeric value.");
//     } else {
//       if (age < 0 || age > 100) {
//         console.log("User entered an age outside the valid range (0-100).");
//       } else {
//         if (age < 18) {
//           console.log("You are a minor.");
//         } else if (age >= 18 && age < 65) {
//           console.log("You are an adult.");
//         } else {
//           console.log("You are a senior citizen.");
//         }
//       }
//     }
//   }
// }

// let inp = prompt("Please enter a number between 1 and 100:");
// for (let i = 1; i < 11; i++) {
//   console.log(`${inp} x ${i} = ${inp * i}`);
// }

// let count = 0;
// for(i = 1; i < 16; i ++){
//   if(i > 8){
//     count ++;
//     console.log(count)
//   }
// }

// for - start end change;
// for(start; end; change){
// }


// ###         While
//  start
// while(end){
// ...  /// your.   code
//}

// let attempts = 0;
// let flag =  false;
// let pass = "Ashu"

// let password = prompt("Enter your pass");
// attempts++;

// if(password === pass) flag = true;

// while(password !== pass){
//   if (attempts === 3) {
//     console.error("Your account locked"); 
//     break;
//   } 
//   password = prompt("Enter your next pass");
//   if(password === pass) flag = true;
//   attempts++;
// } 
// if (flag === true) console.log("Account Open");

//  ### lvl - 2

// let attampt = 0;
// let flag = false;
// let pass = "ashu" 

// let password = prompt("Enter your password")

// if(password === pass) flag = true;


// while (password !== pass){
//   if(attampt === 3) {
//     console.error("your account locked")
//     break;
//   }
//   password = prompt("enter your next password");
//   if(password === pass) flag = true;
//   attampt++;
// }
// if(flag === true ) console.log("Account is open");


// let attempt = 0;
// let pass = "ashu"

// let userpass = prompt("Enter your pass")
// attempt++;


// while(userpass !== pass){
//   if(attempt === 3) {
//     console.error("invaild password")
//     break;
//   }
//   let userpass = prompt("Enter your pass"); 
//   attempt++
// }

// let sum = 0;
// for(let i = 1; i<31; i++){
//   if(i%2 == 0){
//     sum = sum + 1;
//   }
// }
// console.log(sum)

// let num = +prompt("Enter your number");

// while(num%2 == 0){
//   num = +prompt("Enter number");
// }

// console.log("Odd number entered:", num);

let start = prompt("Start");
let end = prompt("End");

if(start>end)console.error("start can not be bigger than end")
for(let i = start; i <= end; i ++ ){
  console.log(i)
}