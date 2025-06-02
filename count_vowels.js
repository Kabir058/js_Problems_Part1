// Task-3:
// Write a function to count the number of vowels in a string.

function countVowels(string)
{   
    let count=0;
    let vowel= ['a', 'e', 'i', 'o', 'u']
    
    for(let vowl of string.toLowerCase())
    {
        if(vowel.includes(vowl))
        {
            count++;
        }
    }return count;
}

let str =countVowels(' A quick brown fox jumps over the lazy dog');
console.log(str)