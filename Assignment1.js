function leapYear(year) {
    // Leap year can said if it is divisible by 4, but not by 100
    // Or if it is divisible by 400
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(leapYear(2020)); //true
  console.log(leapYear(2021)); //false
  console.log(leapYear(2023)); //false
  console.log(leapYear(2024)); //true
  