// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples :

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

function fun1(){
    let sum=0
    for(i=0;i<getBudgets.length;i++){
      sum= sum+getBudgets[i].budget
      
    }
  return sum
}
let getBudgets=([
      { name: "John", age: 21, budget: 23000 },
      { name: "Steve",  age: 32, budget: 40000 },
       { name: "Martin",  age: 16, budget: 2700 }
     ])
     let sum=0
console.log(fun1(sum))
// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600
function fun2(){
    for(i=0;i<getBudget.length;i++){
        sum1 = sum1 + getBudget[i].budget
    }
    return sum1
}
let getBudget=([
      { name: "John",  age: 21, budget: 29000 },
      { name: "Steve",  age: 32, budget: 32000 },
     { name: "Martin",  age: 16, budget: 1600 }
     ])
     let sum1=0
     console.log(fun2(sum1))