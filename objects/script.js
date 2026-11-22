// // let obj = {
// //      name: "Ashu",
// //      // key: value;
// //      age: 21,
// //      Email: "ashusharma123@gmail.com",
// // };


// // let obj2 = new Object();

// // - Creating Object, Accessing Properties, Deleting, Property and Nested Object.

// // let obj = {
// //      Name: "Ashu",
// //      Subject: {
// //           Language: "Python",
// //           Language2: "JavaScript"

// //      }
// // }

// // obj.Subject.Language2


// // - Recognise How Object Are Stored, Traverse Keys of an Object, Array as Object. 
// // - Timing Events - setTimeout(), setInterval(), clearTimeout().
// // - Operation in Object - [freeze, seal, desturing, object methods, this keyword]


// // ### Question
// // write a function sayHello() that prints "Hello JavaScript".

// function sayHello (){
//      console.log("Hello JavaScript");
// }
// sayHello();

// // Create a function add(a, b) that returns their sum and log the results.

// function add(a,b){
//      return a+b;
// }
// let ans = add(2,5);
// console.log(ans)

// // write a function with a default parameter name = "Guest" that prints "Hi <name>".

// function greeting(guest = "guest"){
//      console.log(`Hi ${guest}`);
// }
// greeting("Ashu!")

// // Use rest parameters to make a function that adds unlimited numbers.

// function addUnlimited(...nums){
//      let ans = nums.reduce(function(acc, val){
//           return acc + val;
//      },0);
//      console.log(ans);
// }
// addUnlimited(1,2,3)


// // Create an IIFE that prints "I run isntantly!"

// (function(){
// console.log("Hello everyone, How are you!")
// })();

// // Make a nested function where the inner one prints a variable from the outer one.

// function parent(){
//      let a = 12;
//      function child(){
//           console.log(a);
//      }
//      child();
// }
// parent();


// // Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let arr = ["apple", "guava", "graps", "Banana", "pineapple"];
// arr.push("Orange");
// arr.unshift("pear");


// // Use a for loop at print all elements of an array.
// let arr = [1,2,3,4,5,6];
// for(let i = 0; i<arr.length; i++){
//      console.log(arr[i])
// }

// // Create an object person with keys name, age, and, city, and print each key's value.


// let obj = {
//      name: "Ashu",
//      age: 27,
//      city: "Bijnor"
// };
// for (let Key in obj){
//      console.log(obj[Key])
// }



// ### Questions
// // Use setTimeout() to log "Time's up!" after 2 seconds.

// setTimeout(function( ))