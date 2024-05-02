let employes = [{

username:"advitha",
role:"frontend developer",
salary:1000
},{
    username:"chathura",
    role:"full stack developer",
    salary:2000  
},{
    username:"chandhana",
    role:"software developer",
    salary:3000  

},{
    username:"sanjana",
    role:"frontend developer",
    salary:4000  
},{
    username:"rasagnya",
    role:"frontend developer",
    salary:5000  
}]
 let salarys=employes.filter((emp)=>{
return emp.salary<3000

 })
console.log("salary's of the people who's salary is < 3000 ",salarys)




