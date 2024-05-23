// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If a student has no notes (an empty array) then let's assume avgNote: 0.
// 	Example :
// [
//   { name: "John", notes: [3, 5, 4]}
// ] ➞ [
//   { name: "John", avgNote: 4 }
// ]
function calculateAverageNotes(students) {
    return students.map(student => {
      let sum = student.notes.reduce((prevvalue, currentvalue) => prevvalue + currentvalue);
      let avgNote = student.notes.length > 0 ? sum / student.notes.length : 0;
      return { name: student.name, avgNote };
     
    });
  }
  let res=calculateAverageNotes([ { name: "John", notes: [3, 5, 4] } ]) 

  console.log(res)