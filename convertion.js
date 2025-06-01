function inchTofeet(inch)
{
    let feet= inch / 12;
    return feet;
}

let height = 64;
// console.log(inchTofeet(height))

function inchToFeet(inchs)
{
    let feet = parseInt(inchs / 12);
    let inch = inchs % 12;
    return `He is ${feet} ft and ${inch} inch ` ;
}

let kabirHeight =64;
console.log(inchToFeet(kabirHeight))