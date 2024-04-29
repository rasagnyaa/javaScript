//20. Write a javascript program to  solve the below problem: 
// I/P: “a_bc_d_ef” 
// O/P:”aBcDEf”
debugger
function transformString(input) {
    // Split the input string by underscores
    let parts = input.split('_');

    // Capitalize the first letter of each part (except the first one)
    for (let i = 1; i < parts.length; i++) {
      parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
    
    }
  
    // Join the parts back together
    let output = parts.join('');
  
    return output;
  }
  
  // Example usage
  let input = "a_bc_d_ef";
  let output = transformString(input);
  console.log(output); // Output: "aBcDEf"
  