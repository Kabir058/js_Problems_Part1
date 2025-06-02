// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongestWord(sentence)
{   let longest =' ';
    let words= sentence.split(' ');

    for(let word of words)
    {
          if(word.length> longest.length)
          {
              longest=word;
          }
    }return longest;
}

let strin= findLongestWord('I am learning Programming to become a programmer')
console.log(strin)