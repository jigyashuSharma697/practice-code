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