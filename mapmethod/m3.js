let students = [{
    name : "k.rasagnya",
    gender : "female",
    place : "hyderabad"
},{
    name : "jathin",
    gender : "male",
    place : "warangal"
},{
    name : "sanjana",
    gender : "female",
    place : "karimnagar"
},{
    name : "vashist",
    gender : "male",
    place : "Gdk"
}]
let userNames=students.map((user)=>{
// return user.name
return user.place

})

console.log("studentPlaces :",userNames)
// console.log("students Names :",userNames)
// console.log("information of students : ",userNames)