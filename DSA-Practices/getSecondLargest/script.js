//  I implemented the getSecondLargest function and tested edge acses in Node.js.
function getSeondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        let current = arr[i];

        if(current > largest){
            secondLargest = largest;
            largest = current;
        }
        else if (current > secondLargest && current !== largest){
            secondLargest = current;
        }
    }
    return secondLargest
}

const arr1 = [12, 35, 1, 10, 34, 1];
const arr2 = [50, 50, 20, 45, 30];

console.log(`Array 1 Second Largest: ${getSeondLargest(arr1)}`)
console.log(`Array 2 Second Largest: ${getSeondLargest(arr2)}`)
