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



function getLargestNumber(arr){
    // Step 1: pheli parchi (arr[0]) ko sabse bada maan lo
    let largest = arr[0];

    // Step 2:baki sari parchiyon par ek ek karke jao (loop)
    for(let i = 1; i <= arr.lenght; i++){
        // Step 3: agar current parchi ()
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest
}

const numbers = [14,67,23,89,42,91,35];
console.log(getLargestNumber(numbers))


function getLargestNumber(arr){
    let largest = arr[0];
    
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest
}

const numbers = [14, 67, 23, 89, 42, 91, 35]
console.log(`largest: ${getLargestNumber(numbers)}`)



function getSmallestNumber(arr){
    let smallest = arr[0];
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest
}

const numbers = [14, 67, 23, 89, 42, 91, 35];
console.log(`Smallest: ${getSmallestNumber(numbers)}`)

