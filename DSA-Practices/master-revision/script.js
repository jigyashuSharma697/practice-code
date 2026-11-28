function getSmallestNumber(arr){
    let sum = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < sum){
            sum = arr[i];
        }
    }
    return sum;
}

const smallestSum = [34, 24, 78, 39, 20, 68, -173]

console.log(`Smallest Sum is : ${getSmallestNumber(smallestSum)}`);



function getLargestNumber(arr){
    let largest = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest
}

const largestNum = [-45, -12, -89, -5, -30];

console.log(`largest number is : ${getLargestNumber(largestNum)}`);


function getSecondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const largestVal = [12, 35, 1, 10, 34, 35];

console.log(`Second Largest num is : ${getSecondLargest(largestVal)}`);


function getPositiveSum(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i]

        }
    }
    return sum
}

const totalSum = [30, 244, 24, 25, 75, 50];

console.log(`get positive Sum is : ${getPositiveSum(totalSum)}`);


function getNegativeSum(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            sum += arr[i]
        }
    }
    return sum
}

const negSum = [30, -244, 24, -25, 75, -10];

console.log(` Negative Sum : ${getNegativeSum(negSum)}`)


function getEvenSum(arr){
    let evenSum = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenSum += arr[i]
        }
    }
    return evenSum;
}

const EvenSum = [11, 20, 33, 40, 55, 10];

console.log(`Even number is : ${getEvenSum(EvenSum)}`)


function countPassingMarks(arr){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 33){
            count++;
        }
    }
    return count;
}

const Count = [28, 33, 75, 19, 90, 45];

console.log(`the Pass Student is : ${countPassingMarks(Count)}`);


function getWordsStartingWithA(words){
    let count = 0;

    for(let i = 0; i < words.length; i++){
        if(words[i][0] === "a" || words[i][0] === "A"){
            count++;
    }
    }
    return count
}

const wordsCount = ["Apple", "banana", "ant", "Cat", "Avocado"];

console.log(`there is word : ${getWordsStartingWithA(wordsCount)}`);

function getNegativeNumbers(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const newArry = [12, -5, 30, -18, 0, -2];

console.log(`New Array is : ${getNegativeNumbers(newArry)}`);


function doubleAllNumbers(arr){
    let newNum = [];

    for(let i = 0; i < arr.length; i++){
            newNum.push(arr[i]*2);
    }
    return newNum;
}

const newNumArr = [3, 7, 10, -4, 0];

console.log(`Double arry number : ${doubleAllNumbers(newNumArr)}`);


function getOddSquares(arr){
    let newOdd = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            newOdd.push(arr[i]*arr[i]);
        }
    }
    return newOdd;
}

const oddNum = [2, 3, 4, 5, 6];

console.log(`This is Odd number And Squares too : ${getOddSquares(oddNum)}`);