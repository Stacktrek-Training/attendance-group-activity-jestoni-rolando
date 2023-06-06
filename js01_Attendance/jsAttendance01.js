//initialize
let student = "";
let attendStatus = "Absent";

//attendance function
function attandance_fun(student) {
    //attendance conditions
    if (student = "Minahal") {
        attendStatus = "Present";
      } else if (student = "Nasaktan") {
        attendStatus = "Present";
      } else if (student = "Nagmahal") {
      attendStatus = "Present";
      } else {
        attendStatus = "Absent";
      }
      //ecma script
      return `${attendStatus}`;
}
//display output
console.log(attandance_fun("Nagmahal"));


// Create a function that accepts
// Minahal
// Nasaktan
// Nagmahal

// Return present if is in above
// Absent if none of the above