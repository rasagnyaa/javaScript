//3.Calculate Days Until Next Birthday: Write a function that takes a birthdate as input and calculates the number of days until the next birthday.
// i/p : year => 1990-05-15
// o/p : Days until next birthday:  15

function DaysLeft(birthday){
    let BirthDate=new Date(birthday)
    let today=new Date()
    let days=BirthDate.getDate()-today.getDate()+1
    return days
    }
    let year="1990-05-15"
let days=DaysLeft(year)
console.log(`days  until next birthday : ${days}`)