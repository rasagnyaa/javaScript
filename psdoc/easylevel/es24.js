//24. Print Patter using loop.

			// 1
			// 1 2
			// 1 2 3
			// 1 2 3 4
  		// 	1 2 3 4 5

// const prompt=require('prompt-sync')();
// rows=prompt("enter num of rows : ")
// for(i=1;i<=rows;i++){
//     s=""
//     for(j=1;j<=i;j++)
//         s=s+j+" "
//       console.log(s)
// }
//25=>program to calculate the power of Number using loop only
// let n1=5
// let p=3
// let res=1
// for(i=0;i<p;i++){
//   res=res*n1 
// }
// console.log(`5 ^ 3 = ${res}`)
//26=>program to check whether a number is prime or not
//input = 9;output = 9 is not prime
// let n=9

//         c=0
//     for(i=2;i<n;i++){
//        if(n%i==0)
    
//         c++
//         console.log(`9 is not a prime`)
//     break
// }

// let n=7
// c=0
// for(i=2;i<n;i++){
//     if(n%i==0){
//         c++
//     console.log("not prime")
//     break
// }
// }
// if(c==0){
// console.log(`${n} is prime`)
// }

//27=>program to find LCM of two numbers using while loop
// n1=15
// n2=50
// max=(n1>n2)?n1:n2
// while(true){
//     if(max%n1==0 && max%n2==0){
//         console.log(`lcm is ${max}`)
//         break
//     }
//     max++
// }
//28=>
    // for (let i = 0; i < 26; i++) {
    //     let charCode = 65 + i; // 65 is the ASCII code for 'A'
    //     let char = String.fromCharCode(charCode);
    //     let count = i + 1;
    //     console.log(`${char}${count}`);
    //   }
  //29==> find missing number
//   let n=5
//   let arr=[5,3,1,4]

//   for(let i=1;i<n;i++){
// c=0
// for(j=0;j<arr.length;j++){
//     if(arr[j]===i){
//         c++
//         break
//     }
// }
// if(c==0){
//     console.log(`${i} is missing`)
// }
//   }
// 30==>
// 30. Program to count vowels and consonants in a given String.

// Input: i am ram
// Output: 3 vowels 3 consonants.


//     let str="i am ram"
// let vowels=0
// let consonants=0
// for(i=0;i<str.length;i++){
//     let char=str.toLowerCase().charAt(i)
//     if(char=="a"|| char=="e" ||char=="i"|| char=="o" ||char=="u"){
//         vowels++
//     }else if(char>="a" && char<="z"){
//         consonants++
//     }

// }
// console.log(`${vowels} vowels and ${consonants} consonants`)

//31==========>
  // 31. program to insert  the elements of an array for specific index.

	// 		Input: [1,2,3,4,5,7,8,9,10] , index=5
	// 		Output: [1,2,3,4,5,6,78,9,10]

// program to insert elements of an array for specific index
// index = 5,input=[1,2,3,4,5,7,8,9,10],output=[1,2,3,4,5,6,7,8,9,10]
// let arr=[1,2,3,4,5,7,8,9,10]
// let index=5
// let element=6
// for(i=arr.length;i>index;i--){
//  arr[i]=arr[i-1]   
// }
// arr[index]=element
// console.log(arr)
//32====>reverse a number using while loop
// let num=123
// let rd=0
// while(num > 0){
// let digit=num % 10
// rd=rd*10+digit
// num=Math.floor(num/10)
// }
// console.log(rd)
//33=====>
    //Count occurrence of number:

			// Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
			// Output: 7 present 2 times.

    
            