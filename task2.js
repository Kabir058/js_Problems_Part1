// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// let array =checkRepeat([12,34,54,65,212,34,12,34,3,2,9,2,54,12])

// function checkRepeat(number)
// {    let count=0;
//    for(let num of number)
//    {
//       if(num ===12)
//         count++;
//    }return count;
// }

// console.log(array)

function checkRepeat(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num === target) {
      count++;
    }
  }
  return count;
}

let array = [12,34,54,65,212,34,12,34,3,2,9,2,54,12];
let targetNumber = 54;

console.log(checkRepeat(array, targetNumber)); 
