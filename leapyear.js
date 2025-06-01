function leapyear(year)
{
    if(year%4===0  && year%100 !==0)
        {
            return ` ${year} will be a leap year`
        }
        else if(year % 100===0 && year % 400 ===0)
        {
            return ` ${year} will be a leap year`
        }
        
    else
       {
            return `${year } will  not be a leap year`
       }  

    }
     

let date = leapyear(2100);
let date1 = leapyear(2400);
let date2 = leapyear(1900);
let date3 = leapyear(2052);
console.log(date,date1,date2,date3)