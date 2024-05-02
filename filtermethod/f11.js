 let numbers=[1,2,3,4,5,6,7,8,9,10]
 let EvenNumbers=numbers.filter((value)=>{
return value%2==0
 })
 console.log("even numbers : " ,EvenNumbers)

 let numb=[1,2,3,4,5,6,7,8,9,10]
 let oddNumbers=numb.filter((value)=>{
return value%2 !== 0
 })
 console.log("odd numbers : " ,oddNumbers)

 let num=[1,2,3,4,5,6,7,8,9,10]
 let GreaterValue=num.filter((value)=>{
return value > 5
 })
 console.log("values greater than 5 are : ",GreaterValue)

 let num1=[1,2,3,4,5,6,7,8,9,10]
 let lessthanValue=num1.filter((value)=>{
return value < 9
 })
 console.log("values less than 9  are : ",lessthanValue)