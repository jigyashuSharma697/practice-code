// const word = 'code';
// let reversed = '';

// for(let i = word.length - 1; i >= 0; i--){
//     reversed = reversed + word[i];
// }

// console.log(reversed)


// const text = 'madam'
// let reverse = "";

// for(let i = text.length - 1; i >= 0; i--){
//     reverse = reverse + text[i];
// }

// if( text === reverse){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not a Palindrome");
// }

// console.log(reverse);

const text = 'Madam'
let reverse = "";
const cleanText = text.toLocaleUpperCase();

for(let i = text.length - 1; i >= 0; i--){
    reverse = reverse + cleanText[i];
}

if( cleanText === reverse){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}

console.log(reverse);