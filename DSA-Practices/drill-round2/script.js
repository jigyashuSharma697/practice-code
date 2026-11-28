function getOddSquares(arr){
    let result = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            result.push(arr[i]*arr[i]);

        }
    }
    return result;
}


const text = [2,3,4,5,6]
console.log(`That is Odd number and Square : ${getOddSquares(text)}`)



// Q2. ...
function countWordsStartingWithA(words){
    let count = 0;

    for(let i = 0; i < words.length; i++){
        if(words[i][0] === 'a' || words[i][0] === "A"){
            count++;
        }
    }
    return count;
}

const totalCount = ["Apple", "banana", "ant", "Cat", "Avocado"]

console.log(`This is your Value : ${countWordsStartingWithA(totalCount)}`);



function getSecondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;


    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i]
        } 
        else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest
}

const secNum = [12, 35, 1, 10, 34, 35];

console.log(`Second Largest Number is : ${getSecondLargest(secNum)}`)