// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//       break; // Exits the loop when i is 5
//     }
//     console.log(i);
//   }
// debugger;
// for(i=0;i<5;i++){
//     if(i===2){
//     continue;
//     }
//     console.log(i)
// }
// debugger;
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let number of numbers){
// if (number % 2 === 0) {
// continue;
// }
// console.log(number)
// }
// debugger;
// let count = 0;
// for (let i = 1;i<20 ; i++) {
// if (i % 3 === 0) {
// console.log(i);
// count++;
// }
// if (count === 5) {
// break;
// }
// }
// for(i=1;i<=10;i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i)
// }
// for(i=1;i<=10;i++){
//     if(i%2!==0){
//         continue;
//     }
//     console.log(i)
    
// }
// debugger;
// const names=['rasagnya','Advitha','Aruna','chandu','sanju']
// for(nam of names){
//     if(nam[0]==='A'){
//         continue;
//     }
//     console.log(nam)
// }

const fruits=['Apple','Banana','strawberry','mango','Berry','Apricot']
for(fruit of fruits){
    if(fruit[0]==='B' || fruit[0]==='A'){
        continue;
    }
    console.log(fruit)
}
