//Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// Example:

// findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3

   let arr= [2,2,2,3,4,4,4]
   let x=[]
    for(i of arr){
        if(!x.includes(i))
            x.push(i)
    }
    for(i of x){
        c=0
        for(j of arr){
            if(i==j)
                c++
        }
    
        if(c==1){
          console.log(i)
        }
            
    }
    

