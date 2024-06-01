var year = prompt("Tell the year:"); 

function isLeap(year) {
    var div4 = year % 4 ;
    var div100 = year % 100;
    var div400 = year % 400; 
    
    if (dividedBy4 !== 0) {
  return "Not leap year.";
}
 
if (div4 === 0 && div100 !== 0) {
  return "Leap year.";
}
 
if (div4 === 0 && div100 === 0 && div400 === 0) {
  return "Leap year.";
} 
 
if (div4 === 0 && div100 === 0 && div400 !== 0) {
  return "Not leap year.";
} 

}