// let counter = 1;
// for(let i = 1; i<21; i++){
//     if(i%2 !== 0){
//         console.log(`${counter} this number is odd`)
//         counter++
//     }
// }


// let counter = 0;
// for (let i = 1; i<6; i++){
//     let num = +prompt("Give a Number")
//     if(num>= 0) counter++
// }

// console.log(counter)


// let balance = 1000;
// let flag = false;
//  let counter = 0;


//  while(balance>0 && counter !== 3){
//      let withdraw = +prompt("Kitna paise Withdraw karna hai ?");
//      counter++

//      if(withdraw <= balance) balance -= withdraw;
//     else{
//         flag = true;
//         break;
//     }
    
//  }

//  if(flag === true){
//     console.log("Insufficiet balance");
//  }

//  console.log(`balance : ${balance}`)

//      ### do while

// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while (i<100);


//    ### Recursion in js 

//  function abcd(n){
//     if(n === 0) return
//     console.log(n)
//     abcd(n-1)
//  }
//  abcd(5);


//  ###  loop control statements - [ 'break'], 'continue' ]

// for (let i = 1; i<10; i++){
//     if(i === 5) continue;
//     console.log(i)
// }

//  ### function in javaScript

//  code likhe hi chal jata hai

// function-> aapka code jo turant nahi chalega tab chalega jab aap bologe ki ab chalo

// aap us code ko kitni bhi baar chala sakte ho


function doSomething(name, age, email){
     console.log(arguments[1])
}

doSomething("Ashu", 21, "jigyashusharma@**#=gmail.com")