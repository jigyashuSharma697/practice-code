function countFrequency(arr){
    const freq = {};

    for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        if(freq[item]){
            freq[item] += 1;
        } else{
            freq[item] = 1;
        }
    }
    return freq;
}
const tags = ["js","react","js","node","react","js"];
console.log(countFrequency(tags));

function getDuplicates(arr){
    const freq = countFrequency(arr);
    const duplicate = [];

    for(let key in freq){
        if(freq[key] > 1){
            duplicate.push(key);
        }
    }
    return duplicate;
}




console.log(`Duplicates: ${getDuplicates(tags)}`)




function getMostFrequentNumber(arr){
    let freq = {};
    let maxCount = 0;
    let mostFrequent = arr[0];

    for(let i = 0; i < arr.length; i++){
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
        if(freq[arr[i]] > maxCount){
            maxCount = freq[arr[i]];
            mostFrequent = arr[i]
        }
    }
    return mostFrequent;
}

const mostFrequentArr = [4, 2, 4, 7, 2, 4, 9];

console.log(getMostFrequentNumber(mostFrequentArr));



function countNumber(arr){
    let freq = {};
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(freq[num]){
            freq[num] = freq[num] + 1;
        } else {
            freq[num] + 1;
        }
    }

    return freq
}

const sumFreq = [5, 2, 5, 8, 2, 5];

console.log(countFrequency(sumFreq));


function countWords(arr){
    let freq = {};

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(freq[num]){
            freq[num] = freq[num] + 1;
        }
        else {
            freq[num] = 1;
        }
    }
    return freq
}

const freqSum = ["apple", "banana", "apple", "mango", "banana", "apple"];

console.log("This is obj Value:", countWords(freqSum))



function hasDuplicate(arr){
    let freq = {};

    for(let i = 0; i < arr.length; i++){
        let newArr = arr[i];
        if(freq[newArr]){
            return true;
        }
        else{
            freq[newArr] = 1;
        }
    }
    return false;
}

const newFreq = [1, 2, 3, 1];
const newFreq2 = [1, 2, 3, 4];

console.log("This is newFreq value:", hasDuplicate(newFreq));
console.log("This is newFreq2 value:", hasDuplicate(newFreq2));