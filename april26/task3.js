//3.Write a JavaScript function that takes an array of objects representing books
// . Each book object contains properties for title, author, and year. 
// The function should remove a book from the array based on the title using
//  the splice method, and return the modified array.

function removebook(books,RemovedTitle){
    for(i=0;i<books.length;i++){
        if(books[i].title==RemovedTitle){
            books.splice(i,1)
        }
    }
    return books
}
let books=[{
    title:"book1",
    author:"rassu",
    year:"1999"
},{
    title:"book2",
    author:"chandu",
    year:"1996"
},{
    title:"book3",
    author:"sanju",
    year:"1997"
}]
let RemovedTitle="book3"
let res=removebook(books,RemovedTitle)
console.log(res)