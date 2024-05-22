
// Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
			
// Input:      n=5
// Output:   2 4 6 8 10

// Explanation:  Loop start with 1 go till 5 bcoz n=5
//         1 x 2 =2, 2 x 2=4, 3 x 2=6 …..etc 


let n=5
let n1=2
s=""
for(i=1;i<=n;i++){
    s=s+n1*i+" "
}
console.log(s)
