// const orders = [
//     {id: 101, item: "Laptop", delivered: true},
//     {id: 102, item: "Mouse", delivered: false},
//     {id: 103, item: "Keyboard", delivered: true},
// ]

// // kya array me 102 hai ya koi ek user hai
// const ordersItem = orders.find((order)=>{
//     return order.id === 102;
// });

// console.log(ordersItem);

// // kya array me koi bhi ek false hai
// const hasAnyTrue = orders.some((order)=>{
//     return order.delivered === false;
// })

// console.log(hasAnyTrue);


// // kya array me sabhi true hai
// const allDelivere = orders.every((order)=>{
//     return order.delivered === true;
// })

// console.log(allDelivere)

function greetUser(name,callback){
    console.log(`hello, ${name}`);
    callback();
}

function showWelcome(){
    console.log("Welcome to MERN Bootcamp!")
}

greetUser("Ashu",showWelcome);
// output
// hello, Ashu!
// Welcome to MERN Bootcamp!



function calculateBill(price, tax, callback){
    let total = price + tax;
    callback(total);
    return total;
}

function printReceipt(amount){
    console.log(`Final payable amount is ₹ ${amount}`)
}

calculateBill(1000, 180, printReceipt)