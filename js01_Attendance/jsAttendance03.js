//initialize
const student = ["minahal", "nasaktan", "nagmahal"]

//attendance using arrow function 
const attandance_fun = (recordToFind) => {
    let attendStatus = "Absent"
    //attendance conditions
    if (student.includes(recordToFind.toLowerCase().trim())) {
        attendStatus = "Present"
      } 
      //ecma script
      return `${attendStatus}`
}
//display output
console.log(attandance_fun("ewan"))



// Create a function that accepts
// Minahal
// Nasaktan
// Nagmahal

// Return present if is in above
// Absent if none of the above