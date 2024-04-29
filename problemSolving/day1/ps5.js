// input: 1658
// output: Even sum is bigger
let numbr=prompt("enter a input : ")
es1=0
os1=0
for(i=0;i<numbr.length;i++){
    if(numbr[i]%2==0){
        es1=es1+Number(numbr[i])
        
    }else{
      os1=os1+Number(numbr[i])
    }
}
 if(os1>es1){
console.log("'odd' sum is bigger")
    }else if(es1>os1){
        console.log("'even'sum is bigger")
    }else{
console.log("even and odd are equal")
    }

