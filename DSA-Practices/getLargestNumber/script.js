function getArraySum(arr){
    // 1. shuru mein total sum 0 rakho
    let sum = 0;
    // 2. index 0 se aakhiri element tak loop chalo
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]; // har number ko purane sum me jodte jao
    }   
    return sum;
}


const scores = [10, 25, 15, 40, 10];
console.log(`Total sum: ${getArraySum(scores)}`);




function getArrayAverage(arr){
    let sum = 0; // total sum ko 0 rakhege 
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]; // har element ko sum me add karege
    }

    let totalAverage = (sum/arr.length);
    return totalAverage;
}

const Average = [10,24,42,134,13,5,24,54];
console.log(getArrayAverage(Average));





function countPassingMarks(arr){
    // 1. Shuru me cout 0;
    let count = 0;
    
    // har element check karo
    for(let i = 0; i < arr.length; i++){
        if (arr[i] >= 40){
            count++; // condition sahi hui toh count 1 badhega;
        }
    }
    return count;
}

const marks = [20, 45, 78, 35, 90, 40, 18];

console.log(`Passes Students: ${countPassingMarks(marks)}`);



function countEvenNumber(arr){
    let num = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            num++;
        }
    }
    return num;
}

const evenNum = [10,24,42,134,13,5,24,54];
console.log(`This is Even Number ${countEvenNumber(evenNum)}`)


// i fixed the code...
// i learned logic...
// i will push the code...
// i fixed a bug...