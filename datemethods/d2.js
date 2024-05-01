function CalculateAge(birthdate){
let BirthDate=new Date(birthdate)
let today=new Date()
let age=today.getFullYear() - BirthDate.getFullYear()
let Month=today.getMonth()  - BirthDate.getMonth()
if(Month<0 || (Month===0 && (today.getDate()-1<BirthDate.getDate()))){
    age--
}
return age
}
let year="1990-05-15"
let TotalAge=CalculateAge(year)
console.log(TotalAge)
