//10. Create a function that takes an array of 10 numbers (between 0 and 9) and
// returns a string of those numbers formatted as a phone number (e.g. (555) 555-
// 5555).
function formatPhoneNumber(numbers) {
    let phoneNumber = '(';
    for (let i = 0; i < numbers.length; i++) {
        if (i === 3) {
            phoneNumber += ') ';
        } else if (i === 6) {
            phoneNumber += '-';
        }
        phoneNumber += numbers[i];
    }
    return phoneNumber;
}


const numbers = [9,1,0,0,3,9,8,7,8,8];
console.log(formatPhoneNumber(numbers)); 
