//  ###  1.   function in JavaScript


// - Understanding function in JavaScript and why it's widely used - [ 'parameters', 'arguments', 'rest parameters', 'hoisting', 'variable hoisting', 'function hoisting' ]

// ### parameters & argument
// function abcd(age, name){
    //  parameters
// }

// abcd(12,"harsh")
// arguments


// ### Rest Parameters
// function abcd(a,b,...c){
//     console.log(a,b,c);
// }
// abcd(1,2,3,4,5,6,7,8,9)



// ### hoisting
// console.log(a);
// var a;

//  ### vriable hoisting
// abcd()
// var abcd = function(){
//     console.log('hey');
// }


// ### fuction hoisting
// abcd()
// function abcd(){
//     console.log('happy dashera guys!')
// }





// - Parameters in javascript - [ 'required', 'destructured', 'rest', 'default' ]

//  ### parameters

//  function abcd(a,b,c,d){
//     // agar aapne parameters banye and aapne unme arguments nahi bheje to fir wo value parameters ki undefined ho jayegi

//  }
//  abcd();


//  ### destructured
//  function abcd ([name, age]){
//     console.log(name, age)
//  }
// abcd(["Ashu", 21])

// ### Rest
// function abcd(...hi){
//     console.log(hi)

// }
// abcd(1,2,3,4,5)


//  ### Default
// function abcd(a = 0,b = 0,c = 0){
//   console.log(a,b,c)
// }
// abcd(1,2);


// - 'Argument in JavaScript - ['positional', 'default', 'spread']


// ### positional
// function efgh (a,b,c,d){
//     console.log(a,b,c,d)
// }
// abcd(1,2,null,4)


// ### spread
// function abcd(a,b,c,d){
//     console.log(a,b,c,d)
// } 
// let arr = [1,2,3,4];
// abcd(...arr);


// - 'Classic function', 'Nested function'(function within function), Scope chain' in javascript.


//  ### Nested loop
// function abcd(){
//     function defg(){
//         console.log("Ashu")
//     }
//     defg();
//     console.log("Namaste")
// }
// abcd()


// ### scope chain
// function abcd(){
//     function efg(){
//         console.log("Hello, World!")
//     }
//     efg()
// }
// abcd()



// - Understading Immediately Invoked Function Expression(IIFE). 


// ### (IIFE)
// (function(){
//     let balance = 100000000;
// })


// - More function in JavaScript - ['Arrow Function', 'fat arrow', 'function', 'Anonymous', 'Higher Order', 'Callback', 'First class', 'pure  function', 'Impure Function'] 

// ### fat arrow function
// let fnc = ()=>{
//     console.log("heheheeheehehhehehehe")
// }
// fnc()


// ### anonymous
// function(){
// } without name wala anonymous hota hai


// ### higher oder

// hof -> ek aisa fnc jo ki return karde ek aur function
// wo fnc accept karle ek aur fnc parameter me 
// function abcd(){
//     return function(){
//         return function(){

//         }
//     }
// 

// ### call back
//  ek function jo parameter me hi ek function leta ho
// function abcd(){

// } 

// abcd(function(){

// })




// ### first class

// first class function concept hai -> functions us language me  varibale ki tarah use ho sakte hai


// let abcd(a,b){
    
// }
// abcd(function(){

// }, b)


// ### pure function

// let a = 12;
// function abcd(val){
//     a = Math.random() + val;
//     console.log(a);
// }
// abcd(12)
// abcd(15)
// abcd(14)
// abcd(13)
// abcd(16)



// - Understanding Scoping in js - ['global scope', 'function', ]


// a();
// let a = function(){
//     console.log("Hello world!")
// }



// - Understanding 'Closures', 'Scoping Rule'.

//  closure -> ek function hai jo return karta hai function but returning function jo hai wo parent fnc ka koi variable use karega


function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}


// closure -> high of oder hota hai