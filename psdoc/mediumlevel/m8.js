// Most Commonly Used two Character in String(can not use predefined function)
// 				Input: ‘Hii i am ram’
// Output; i, a
let str="Hii i am ram"
s=""
dup=""
for(i of str){
    if(!s.includes(i))
        s=s+i
}
for(i of s){
    c=0
    for(j of str){
        if(i==j)
            c++
      
    }
    if(c>1){
        dup=dup + i + " "
        
    }
}
console.log(dup)