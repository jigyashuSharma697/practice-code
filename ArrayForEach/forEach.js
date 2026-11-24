// let numbers = [10,20,30];

// for (let value of numbers){
//     console.log(value*2) // value me numbers ke refference aata hai
// }

// console.log(numbers) // orginal value change nahi hogi


// let numbers = [10,20,30];

// numbers.forEach(function(value){
//     console.log(value);
// })


// let numbers = [5,10,15,20]
// numbers.forEach(function(value){
//     console.log(value*2)
// })



// let numbers = [1,2,3,4,5,6,7,8,9,10]
//  numbers.forEach(function(doubleValue){ // forEach har elementt ko value me deta hau aur callback function us par operational perform karta hai 

//     console.log(doubleValue*doubleValue) // value ko 2 se multiply krega
//  })

// let fruits = ['pizza', 'burger', 'pasta', 'sandwich']

// fruits.forEach(function(value,index, array){
//     console.log(value,'+',index,array)
// }
// )

// let food = ['pizza','burger','pasta','sandwich']

// food.forEach(function(value, index){
//     console.log(`${index}: ${value}`)
// })

// let prices = [100,250,400,500];

// prices.forEach(function(value,discount ){
//     let discountApply = ( value * discount ) / 100;
//     let finalAmount = value - discountApply
//     console.log(finalAmount, 10)
// })



// const number = [5,10,15,20];

// let finalResult = number.map(function(value){
//     return value*3
// })

// let result = number;


// console.log(result)
// console.log(finalResult)



// const fruits = ['apple', 'mango', 'banana'] 

// fruits.forEach(function(value){ // isme 3 value hai 
//     console.log(value) // aur 3 iteration hogi
// })

// const numbers = [10,20,30,40];

// numbers.forEach(function(value,index,array){
//     console.log(value,index,array) 
//     // 10 se 40 tak, value
//     // 0 se 3 tak, index
//     // isme sabme array print hoga 
// })


// const number = [10,20,30];
// number.forEach(function(value,index,array){
//     number[index] = value * 2;
// });

// console.log(number);


// const number = [10,20,30]

// number.forEach(function(value,index,array){
//     array[index] = value + 5;
// })

// console.log(number);

// let final = number.map(function(value){
//     return value*5;
// })

// console.log(final)


// const num = [3,4,5];

// let squareNum = num.map(function(value){
//     return value*value;
// })

// console.log(squareNum)


// const students = ['Rahul', 'Aman', 'Priya', 'Rohit'];

// let allStudents = students.map(function(value,index){
//     return` ${index + 1}. ${value}`;
// })

// console.log(allStudents)


const numbers = [10,20,30];

let totalNumbers = numbers.map(function(value,index,array){
    return `Number:  ${value},  Index:  ${index},  Array:  ${array}`;
    // 3 bar kyuki array ka index bhi 3 hai jo ki 0 se 2 tak jata hai 
})

console.log(totalNumbers)
