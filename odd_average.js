function oddAverage(numbers)
{
    let nmbr=[];
    for(let number of numbers)
    {
        if(number%2===1)
           
        nmbr.push(number)

    }
    let sum=0;
    for(let num of nmbr)
    {
        sum+= num;
    } return sum/ nmbr.length;
    
}

let array = oddAverage([1,2,3,4,5,6,7,8,9,10,11]);
console.log(array)