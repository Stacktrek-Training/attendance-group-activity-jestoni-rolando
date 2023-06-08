//Variables
const Participants = 32;
const rounds = [3,24,2,6,1,3,5];

//Function that will compute the remaining participants
function sinking(Participants,rounds) {
  //1. set a default variable that will handle the remaining participants
  let participantsLeft = Participants;
  //2. use for loop to go thru the array and perform the computation
  for (var i = 0; i < rounds.length; i++) { 
      //3. divide the participants 'participantsLeft' variable by the array variable value per every loop
      //then get only the whole number using the function 'Math.trunc()'
      participantsLeft = Math.trunc(participantsLeft/rounds[i]);
      //4. multiply remaining Participants new value with the array variable value per every loop
      participantsLeft = participantsLeft * rounds[i];
    }
    //5. get the last remaining Participants value from 'participantsLeft' variable
    // console.log("Last remaining participants: " + participantsLeft); 
    return participantsLeft; 
}
// //6. Display output
// console.log("Participants: " + Participants);
// //6.1 Display function output using the array rounds as parameter
// sinking(Participants,rounds);

//6.1 Display function output using the array rounds as parameter
console.log(sinking(Participants,rounds))