// const student = [
//     {
//         id: 1, name: 'Ashu', marks: 85
//     },
//     {
//         id: 2, name: 'Priyanshu', marks: 90
//     },
//     {
//         id: 3, name: 'Khushi', marks: 95
//     }
// ]

// const studentName = student.map(function(student){
//     return student.name;
// });

// console.log(studentName);

// const product = [
//     {item: 'Mouse', price: 500},
//     {item: 'Keyboard', price: 1000}
// ]

// const finalPrice = product.map(function(productAddPrice){
//     return{
//         item: productAddPrice.item,
//         finalPrice: productAddPrice.price+50
//     }
// })

// console.log(finalPrice)
// console.log(product)



// const product = [
//     {item: 'Mouse', price: 500},
//     {item: 'Keyboard', price: 1000}
// ]

// const newRate = product.map(function(rate){
//     return {
//         item: rate.item,
//         newRate: rate.price-100
//     }
// })



// console.log(newRate)



// const users = [
//         {username: 'dev_ashu', age:21},
//         {username: 'coder_rahul', age:25}
//     ];

//     const result = users.map((u)=>{
//         return u.age*2;
//     });

//     console.log(result)


// const users2 = [
//         {username: 'dev_ashu', age:21},
//         {username: 'coder_rahul', age:25}
//     ];

//     const result2 = users.map((u)=>{
//         return u.username;
//     });

//     console.log(result2)


// const employees = [
//     {name: 'Ravi', salary: 20000},
//     {name: 'Neha', salary: 30000},
//     {name: 'Aman', salary: 25000}
// ];

// let employeesSalary = employees.map((s)=>{
//     return {
//         name:s.name,
//         bonusSalary: s.salary + 5000
//     }
// })

// console.log(employeesSalary);


// const nums = [10,15,22,33];

// const numbersChecking = nums.map((num)=>{
//     if (num % 2 === 0){
//         return 'Even';
//     }
//     else{
//         return 'Odd'
//     }
// });

// console.log(numbersChecking)




// ek function ke ander agar consle.log(x) likha hai yeh value function me turant print kar dega par bahar yeh callback nahi hoga isliye return use hota hai taki kabhi bhi kahi bhi access kar sakte



// function multiply(a,b = 5){
//     return a*b;
// }

// console.log(multiply(4)) // 4 mene argument pas kiya hai a ko aur dusra argument nahi pass kiya tab b ka default 5 value ke yeh return work karke 20 print karega 

// console.log(multiply(4,2)) // ab 4 aur 2 argument pass kiya hai toh 8 aayega answer



// function calculateGST(price, gstPercent = 18){
//     const gstAmount = (price*gstPercent)/100;
//     return price + gstAmount;
// }

// const bill = calculateGST(1000);


// console.log(bill)




// const ages = [12, 9, 18, 25, 11, 15, 30];

// const adults = ages.filter(function(age){
//     return age>=18;
// })

// console.log(adults)


// const products = [
//     {name: 'Earsphones', price: 800},
//     {name: 'Smartwatch', price: 2500},
//     {name: 'Mouse', price: 500},
//     {name: 'Monitor', price: 9000},
// ]


// const budgetProducts = products.filter((item)=>{
//     return item.price < 1000;
// })


// console.log(budgetProducts)


// const students = [
//     {name: 'Aryan', marks: 32},
//     {name: 'Sneha', marks: 78},
//     {name: 'Rohan', marks: 33},
//     {name: 'Kavya', marks: 29},
// ]


// const passStudents = students.filter((s)=>{
//     return s.marks >= 33;
// })


// console.log(passStudents) 
// // output
// // Sneha = 78;
// // Rohan = 33




// const numbers = [5, 12, 8, 21, 30, 7, 14];

// let evenNumbers = numbers.filter((num)=>{
//     if(num%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(evenNumbers)


// 6307497386


// const orders = [
//     {
//         id: 101, item: "Laptop Bag", delivered: true
//     },
//     {
//         id: 102, item: "USB Cable", delivered: true
//     },
//     {
//         id: 103, item: "Mechanical Keyboard", delivered: true
//     },
//     {
//         id: 104, item: "Webcam", delivered: false
//     },
// ]


// const pendingOrders = orders.filter((pending)=>{
//     return pending.delivered === false;
// })

// console.log(pendingOrders)


// const price = [250, 120, 890, 450, 600];

// let maxPrice = price[0]

// for(i = 1; i < price.length; i++){
//     if(price[i]> maxPrice){
//         maxPrice = price[i]
//     }
// }

// console.log(maxPrice)


// const price = [250, 120, 890, 450, 600];

// let lessPrice = price[0]

// for(let i = 1; i < price.length; i++){
//     if(price[i] < lessPrice){
//         lessPrice = price[i]
//     }
// }

// console.log(lessPrice)



// const cart = [150, 300, 50, 500];

// let total = 0;

// for( let i = 0; i < cart.length; i++){
//     total += cart[i]
// }

// console.log(total);


// const score = [12, 7, 24, 9, 18, 31, 40];

// let count = 0;

// for(let i = 0; i < score.length; i++){
//     if(score[i]% 2 === 0){
//         count++;
//     }
// }

// console.log(count)

// const users = [
//     {
//         name: 'Rohan', age: 22, active: true
//     },
//     {
//         name: 'Priya', age: 17, active: false
//     },
//     {
//         name: 'Amit', age: 25, active: true
//     },
//     {
//         name: 'Ashu', age: 21, active: true
//     },
//     ];

// // Step 1: sirf active users nikalo -> step 2: sirf unke naam lo 

// const activeUersNames = users.filter((user)=> user.active === true).map((user) => user.name);

// console.log(activeUersNames)




// const courses = [
//     {title: "HTML & CSS", price: 499},
//     {title: "MERN Stack", price: 2999},
//     {title: "Git & GitHub", price: 299},
//     {title: "DSA Mastery", price: 1999},
// ]

// // Step 1: hum phele price nikalege -> Step 2: sirf 1000 se kam wale name lane hai

// const minCourse = courses.filter((notes)=> notes.price < 1000).map((notes)=> notes.title);


// console.log(minCourse)





// const marks = [70, 80, 65, 85];


// const totalMarks = marks.reduce((total, currentMark)=>{
//     return total + currentMark;
// })

// console.log(totalMarks)



// const item = [
//     {name: "Book", price:200},
//     {name: "Pen", price: 50}
// ];


// const bill = item.reduce((total,currentitem)=>{
//     return total + currentitem.price;
// }, 0);

// console.log(bill)


// const expenses = [120, 450, 80, 350, 200]

// const totalExpenses = expenses.reduce((total, currentexpenses)=>{
//     return total + currentexpenses;
// }, 0);

// console.log(totalExpenses)



// const cart = [
//     {item: "Shoes", price: 1500},
//     {item: "T-Shirt", price: 500},
//     {item: "Cap", price: 300}
// ]



// const totalBill = cart.reduce((total, currentCart)=>{
//     return total + currentCart.price
// },0);

// console.log(totalBill)


// const students = ["Aarav", "Rohan", "Priya", "Neha", "Kabir"]

// const target = "Priya";


// // phele hum loop chalege 

// for (let i = 0; i<students.length; i++){
//     if (students[i] === target){
//         console.log(`Found at index ${i}`);
//     }
// }



// const statusCodes = [200, 201, 404, 500];
// const searchCode = 404;

// for(let i = 0; i < statusCodes.length; i++){
//     if(statusCodes[i] === searchCode){
//         console.log(`Error found at index ${i}`)
//     }
// }


