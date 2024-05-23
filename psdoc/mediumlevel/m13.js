// Find sum of the Unique numbers: 
// Example : Let arr = [1, 2, 2, 1, 3, 5, 1];
//  The unique numbers are 1,2, 3, 5 so the sum should be 11.
let arr=[1, 2, 2, 1, 3, 5, 1];
unq=" "
s=" "
sum=0
for(i of arr){
    if(!s.includes(i))
       s=s+i
    }
    
console.log(s)