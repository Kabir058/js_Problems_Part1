function no_duplicate(array)
{
    let unique = [];
    for (let val of array) {
        if (unique.includes(val) === false)
            unique.push(val)
    } return unique;
}

let selected = no_duplicate(['kabir', 'abir', 'kabir', 'abir', 'sabbir', 'rabbi', 'hasan', ' sabbir'])

let digits = no_duplicate([2, 34, 5, 7, 43, 65, 23, 3, 5, 43, 7, 23])
console.log(digits)
