function CurrentDateTime(){
let now=new Date()
let year=now.getFullYear()
let month=now.getMonth()
let day=now.getDay()
let hrs=now.getHours()
let min=now.getMinutes()
let seconds=now.getSeconds()
   return `"${year}-${month}-${day} ${hrs}:${min}:${seconds}"` 
}
console.log(CurrentDateTime())