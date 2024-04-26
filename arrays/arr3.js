//push
//Write a function addToArrayEnd(array, element) that adds an element to the end of the array using the push method.
// Input: addToArrayEnd([1, 2, 3], 4)
// Output: [1, 2, 3, 4]
function addToArrayEnd(array,element){
 array.push(element)
return array;
    
}
let myArray=[1,2,3];

let result=addToArrayEnd(myArray,4);
console.log(result)
