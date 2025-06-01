function leapyear(year)
{
    if(year%4===0)
        {
            return ` ${year} will be a leap year`
        }
        
    else
       {
            return `${year } will  not be a leap year`
       }  

    }
     

let date = 2002;
console.log(leapyear(date))