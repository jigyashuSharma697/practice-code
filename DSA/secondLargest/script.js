const scores =[45, 89, 23, 94, 67, 94, 51];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i <= scores.length; i++){
    let num = scores[i];
    if (num > first){
        second = first;
        first = num;
    }
    else if( num > second && num !== first){
        second = num;
    }
}

console.log(`Second Largest: ${second}`)