let marksOfStudents = [{

name : "student-01",
age : 18,
marks: 90,
grade : "A"
},{
    name : "student-02",
    age : 18,
    marks: 70,
    grade : "B"

},{
name : "student-03",
age : 18,
marks: 60,
grade : "c"
},{
name : "student-04",
age : 18,
marks: 85,
grade : "A"
}
]

let AvgMarks=marksOfStudents.filter((mrk)=>{
return mrk.marks <= 80
})
console.log("students marks <= 80 are",AvgMarks)
