function isLeapYear(year) {
    return new Date(year, 1, 29).getDate() === 29;
  }
  
  
  console.log(isLeapYear(2024)); 

  