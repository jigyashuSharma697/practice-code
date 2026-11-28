function getSmallestNumber(arr) {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

const finallSmallestNum = [34, 24, 78, 39, 20, 68, -173];

console.log(`the Smallest num is : ${getSmallestNumber(finallSmallestNum)}`);

function getPositiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const totalSum = [30, 244, 24, 25, 75, 50];

console.log(`Total of sum value is : ${getPositiveSum(totalSum)}`);

function getNegativeSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const negNum = [30, -244, 24, -25, 75, -10];

console.log(`Total of Neg Num of num is : ${getNegativeSum(negNum)}`);

function getLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let totalLargestNum = [-45, -12, -89, -5, -30];

console.log(`Largest Num is : ${getLargestNumber(totalLargestNum)}`);

function getEvenSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const totalSumVal = [11, 20, 33, 40, 55, 10];

console.log(`this is even value : ${getEvenSum(totalSumVal)}`);

function countPassingMarks(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 33) {
      count++;
    }
  }
  return count;
}

let totalCount = [28, 33, 75, 19, 90, 45];

console.log(`The count of pass Students is : ${countPassingMarks(totalCount)}`);

function getNegativeNumbers(arr){
    let negNum = [];

    for(let i = 0; i < arr.length; i ++){
        if(arr[i] < 0){
            negNum.push(arr[i]);
        }
    }
    return negNum;
}

let totalNegNum = [12, -5, 30, -18, 0, -2];

console.log(`Print all negNum is : ${getNegativeNumbers(totalNegNum)}`)