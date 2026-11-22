function square(num){
    return num*num;
}

function calculate(callback, value){
    return callback(value);
}


const final = calculate(square, 5)

console.log(final)