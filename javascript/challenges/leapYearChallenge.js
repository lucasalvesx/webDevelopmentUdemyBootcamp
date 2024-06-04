// for a year to be a leap yer, we got the rules:
// it must be evenly divisible by 4, by 100 and by 400
// to check this we use the modulo operator - the rest must be 0

function isLeap(year) {
  if (year % 4 === 0){
    if (year % 100 === 0){
      if (year % 400 === 0){
        return "Leap year";
      } else {
        return "Not leap year";
      } 
    } else {
      return "Leap year";
    }
  } else {
    return "Not leap year";
  }
  }