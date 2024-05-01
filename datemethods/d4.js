// 4.Calculate Days Between Two Dates: Create a function that takes two dates as input and calculates the number of days between them.
// i/p : "2024-04-20", "2024-04-30"
// o/p : Days between two dates:  10
function DaysLeft(date1,date2){
    let startDate=new Date(date1)
    let endDate=new Date(date2)
    let daysleft=endDate-startDate
 let daysformat=daysleft/(1000 * 3600 * 24)
 return daysformat
}
date1="2024-04-20"
date2="2024-04-30"
let totalDays=DaysLeft(date1,date2)
console.log(` days between two dates : ${totalDays}`)